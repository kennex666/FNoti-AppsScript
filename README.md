# FNoti - Open Source
Notification board for students using Google Apps Script

[See the Vietnamese README.md file here](README_VI.md)

## Author
Duong Thai Bao - A student of Cohort 17, Industrial University of Ho Chi Minh city

## Purpose
This project is a personal endeavor aimed at creating a ready-to-use notification system that enables users to store important information visually, especially useful for those working on a project.

## Requirements
* Google Account
* Apps Script: [Home Page](https://script.google.com/home/)
* Google Forms and Google Sheets
* GitHub Pages, etc., for hosting HTML files

## Instructions for Use:

### Google Forms
1. Create a form with the following fields:
   - `ID`: Used to identify the notification board for each group (Short Answer)
   - `TYPE`: Notification type (dropdown or radio button, as preferred) with four types: INFO, IMPORTANT, UPDATE, REQUIRE_ACTION (in uppercase)
   - `CONTENT`: Stores the notification message (Paragraph)
   - `IS_PINNED`: Radio button with two values: 0 and 1. Select 1 if you want to pin the notification.
2. Link the form with Sheets.
3. Open the linked Sheet and copy the Sheet ID from the URL:  
   `https://docs.google.com/spreadsheets/d/xxx/edit` where `xxx` is the Sheet ID.
4. Remember the Sheet name for use in the next steps.

### Google Apps Script
1. Create a project.
2. Copy the code from `api_appscript.gs` and paste it into the project file.
3. Update the Sheet ID and name in the code.
4. Deploy as a Web App.
5. Copy the Web App's Execute Script URL.

### Web Deployment
1. Replace the API URL in the `index.html` file with the URL from your Google Apps Script deployment.
2. Create test data using the form created above, and fill it out with the ID you specified (recommended format: no spaces, no accents, only A-Z, a-z, 0-9, hyphen `-` and underscore `_`).
3. Test the URL:
   `index.html?id=xxx&`

## ISSUES RELATED TO INFORMATION AND TERMS OF USE
* This project was originally developed for personal use, but due to its potential utility, it has been shared with the community as a non-commercial project. Therefore, we are not liable for any damages related to the use of this product.

* You are welcome to use it for personal purposes. If you commercialize it (including the interface, features built on the original source, or adjusted logic), we kindly request that you acknowledge this free project if possible.
