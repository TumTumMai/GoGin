import { Request, Response } from "express";
const { google } = require("googleapis");

const auth = new google.auth.GoogleAuth({
  keyFile: "credentials.json",
  scopes: "https://www.googleapis.com/auth/spreadsheets",
});

export const createSheets = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const client = await auth.getClient();
  const googleSheets = google.sheets({ version: "v4", auth: client });
  const spreadsheetId = "1JFpLr7l4uHB4S2d6W2925CXu-GNcIam2_rXxEUe90f8";
  const { title } = req.body;

  const createSheets = await googleSheets.spreadsheets.batchUpdate({
    spreadsheetId,
    resource: {
      requests: [
        {
          addSheet: {
            // Add properties for the new sheet
            properties: {
              // "sheetId": number,
              title: title,
              // "index": number,
              // "sheetType": enum(SheetType),
              // "gridProperties": {
              //     object(GridProperties)
              // },
              // "hidden": boolean,
              // "tabColor": {
              //     object(Color)
              // },
              // "rightToLeft": boolean
            },
          },
        },
      ],
    },
  });

  return res.status(200).json(createSheets);
};

export const getMeta = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const client = await auth.getClient();
  const googleSheets = google.sheets({ version: "v4", auth: client });
  const spreadsheetId = "1JFpLr7l4uHB4S2d6W2925CXu-GNcIam2_rXxEUe90f8";
  const metaData = await googleSheets.spreadsheets.get({
    auth,
    spreadsheetId,
  });
  //   console.log(req.body.breed);
  return res.status(200).json(metaData.data);
};

export const getRows = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const client = await auth.getClient();
  const googleSheets = google.sheets({ version: "v4", auth: client });
  const spreadsheetId = "1JFpLr7l4uHB4S2d6W2925CXu-GNcIam2_rXxEUe90f8";
  const getRows = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: "ชีต1",
  });

  //   console.log(req.body.breed);
  return res.status(200).json(getRows.data);
};

export const addRow = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const client = await auth.getClient();
  const googleSheets = google.sheets({ version: "v4", auth: client });
  const spreadsheetId = "1JFpLr7l4uHB4S2d6W2925CXu-GNcIam2_rXxEUe90f8";
  const { values } = req.body;
  const row = await googleSheets.spreadsheets.values.append({
    auth,
    spreadsheetId,
    range: "ชีต1",
    valueInputOption: "USER_ENTERED",
    resource: {
      values: values,
      //   [[request, name]],
    },
  });
  //   console.log(req.body.breed);
  return res.status(201).json(row.data);
};

export const updateValue = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const client = await auth.getClient();
  const googleSheets = google.sheets({ version: "v4", auth: client });
  const spreadsheetId = "1JFpLr7l4uHB4S2d6W2925CXu-GNcIam2_rXxEUe90f8";
  const { values } = req.body;
  const updateValue = await googleSheets.spreadsheets.values.update({
    // auth,
    spreadsheetId,
    range: "ชีต1",
    valueInputOption: "USER_ENTERED",
    resource: {
      values: values,
      //   [[request, name]],
    },
  });
  //   console.log(req.body.breed);
  return res.status(201).json(updateValue);
};
