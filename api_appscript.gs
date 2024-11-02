const LIMIT_DEFAULT = 5;
function doGet(e) {
  try {
    const params = e && e.parameter ? e.parameter : {};
    const id = params.id;;
    if (!id)
      return ContentService.createTextOutput(JSON.stringify({ errorCode: 200, message: 'Truy vấn thành công!', data: [] })).setMimeType(ContentService.MimeType.JSON);

    var offset = params.offset ? params.offset : 0;
    var limit = params.limit ? params.limit : LIMIT_DEFAULT;

    offset = Number(offset);
    if (isNaN(offset)) {
      offset = 0;
    }

    const result = getNotification(id, offset, limit);

    return ContentService.createTextOutput(JSON.stringify({ errorCode: 200, message: 'Truy vấn thành công!', total: result.totalData, data: result.allData })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (ex) {
    console.log(ex);
    return ContentService.createTextOutput(JSON.stringify({ errorCode: 500, message: 'Xảy ra lỗi', data: ex })).setMimeType(ContentService.MimeType.JSON);
  }
}

function formatDate(date) {
  const options = { hour: '2-digit', minute: '2-digit', hour12: true };
  
  const time = new Intl.DateTimeFormat('en-US', options).format(date).replace('AM', 'A.M').replace('PM', 'P.M');
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  return `${time} ${day}/${month}/${year}`;
}

function getNotification(id, offset = 0, limit = LIMIT_DEFAULT) {
  const COLUMN = {
    timestamp: 0,
    id: 1,
    type: 2, 
    notification: 3,
    isPinned: 4
  };

  const spreadsheets = SpreadsheetApp.openById("<REPLACE YOUR SHEET ID HERE>");
  const sheet = spreadsheets.getSheetByName("Form Responses 1");
  const data = sheet.getDataRange().getValues();

  const unpinnedData = data.filter(row => row[COLUMN.id] == id && !Number(row[COLUMN.isPinned])).reverse();
  const pinnedData = data.filter(row => row[COLUMN.id] == id && Number(row[COLUMN.isPinned]));

  const paginatedData = [...pinnedData, ...unpinnedData.slice(offset, offset + limit)];

  // Format data as needed (e.g., into objects)
  const notifications = paginatedData.map(row => ({
    id: row[COLUMN.id],
    type: row[COLUMN.type],
    notification: row[COLUMN.notification],
    timestamp: formatDate(new Date(row[COLUMN.timestamp])),  // Ensure date conversion here
    isPinned: !!Number(row[COLUMN.isPinned])
  }));

  return { allData: notifications, totalData: unpinnedData.length + pinnedData.length };
}
