import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableBody,
  styled,
  Stack,
  Pagination,
  Tooltip,
  tooltipClasses,
} from "@mui/material";

const StyledTableCell = styled(TableCell)(({ color }) => ({
  color: color || "#A5AFBA",
  borderTop: "1px solid #161616",
  borderBottom: "1px solid #161616",
  paddingBlock: 24,
}));

const StyledPagination = styled(Pagination)(() => ({
  // Target specific elements for color customization
  "& .MuiPaginationItem-root": {
    color: "#A5AFBA", // Set your desired custom color for the root element
  },
  "& .MuiPaginationItem-selected": {
    color: "#A5AFBA", // Set your desired custom color for the selected item
  },
  "& .MuiPaginationItem-text": {
    color: "#A5AFBA", // Inherit color from root element
  },
}));

const CustomWidthTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 500,
    maxHeight: 362,
    overflowY: "auto",
    backgroundColor: "#222222",
    fontSize: "0.875rem",
    color: "#29845A",
    paddingBlock: 16,
  },
});
const columns = [
  { id: "1", field: "cpid", headName: "CPID", width: 150 },
  { id: "2", field: "time", headName: "Time", width: 150 },
  { id: "3", field: "command", headName: "Command", width: 150 },

  { id: "4", field: "payloadData", headName: "Payload Data", width: 400 },
  { id: "5", field: "uniqueId", headName: "Unique ID", width: 238 },
];

const rows = [
  {
    cpid: "g01",
    time: "Nov 16, 2022 7:09:36 AM",
    command: false,
    payloadData: `{   "connectorId": 1,   "transactionId": 0,   "meterValue": [     {       "timestamp": "2024-04-25T11:09:10.968Z",       "sampledValue": [         {           "measurand": "Energy.Active.Import.Register",           "value": "401",           "unit": "Wh",           "location": "Outlet",           "context": "Sample.Periodic"         }       ]     },     {       "timestamp": "2024-04-25T11:09:10.968Z",       "sampledValue": [         {           "measurand": "Power.Active.Import",           "value": "4351",           "unit": "W",           "location": "Outlet",           "context": "Sample.Periodic"         }       ]     },     {       "timestamp": "2024-04-25T11:09:10.968Z",       "sampledValue": [         {           "value": "91",           "context": "Sample.Periodic",           "format": "Raw",           "measurand": "SoC",           "location": "EV",           "unit": "Percent"         }       ]     }   ] }`,
    uniqueId: "1668656494-54311937",
  },
  {
    cpid: "g02",
    time: "Nov 16, 2022 7:09:36 AM",
    command: true,
    payloadData: `{   "connectorId": 1,   "transactionId": 0,   "meterValue": [     {       "timestamp": "2024-04-25T11:09:10.968Z",       "sampledValue": [         {           "measurand": "Energy.Active.Import.Register",           "value": "401",           "unit": "Wh",           "location": "Outlet",           "context": "Sample.Periodic"         }       ]     },     {       "timestamp": "2024-04-25T11:09:10.968Z",       "sampledValue": [         {           "measurand": "Power.Active.Import",           "value": "4351",           "unit": "W",           "location": "Outlet",           "context": "Sample.Periodic"         }       ]     },     {       "timestamp": "2024-04-25T11:09:10.968Z",       "sampledValue": [         {           "value": "91",           "context": "Sample.Periodic",           "format": "Raw",           "measurand": "SoC",           "location": "EV",           "unit": "Percent"         }       ]     }   ] }`,
    uniqueId: "1668646494-54311937",
  },
];

export default function LogTable() {
  return (
    <TableContainer
      component={Paper}
      sx={{
        backgroundColor: "#222222",
      }}
    >
      <Table>
        <TableHead
          sx={{
            height: 32,
            backgroundColor: "#1C1E1F",
          }}
        >
          <TableRow>
            <TableCell
              sx={{
                padding: 0,
                paddingLeft: "16px",
                color: "#ffffff",
                borderBottom: "1px solid #161616",
                width: 10,
              }}
            />
            {columns.map((column) => (
              <TableCell
                sx={{
                  padding: 0,
                  paddingLeft: "16px",
                  color: "#ffffff",
                  borderBottom: "1px solid #161616",
                }}
                key={column.id}
                width={column.width}
              >
                {column.headName}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <StyledTableCell />

              <StyledTableCell>{row.cpid}</StyledTableCell>
              <StyledTableCell>
                <div style={{ whiteSpace: "pre-line" }}>
                  {row.time.split(" ")[0] +
                    " " +
                    row.time.split(" ")[1] +
                    " " +
                    row.time.split(" ")[2]}
                  {"\n"}
                  {row.time.split(" ")[3] + " " + row.time.split(" ")[4]}
                </div>
              </StyledTableCell>
              <StyledTableCell>
                <span
                  className={`${
                    row.command ? "text-[#219653]" : "text-[#EB5757]"
                  }`}
                >
                  {row.command ? "Online" : "Unavailable"}
                </span>
              </StyledTableCell>
              <StyledTableCell>
                <CustomWidthTooltip
                  title={row.payloadData}
                  slotProps={{
                    popper: {
                      modifiers: [
                        {
                          name: "offset",
                          options: {
                            offset: [50, -34],
                          },
                        },
                      ],
                    },
                  }}
                >
                  <div
                    style={{
                      width: 400,
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      position: "relative",
                      zIndex: 1000,
                      color: "#29845A",
                    }}
                  >
                    {row.payloadData}
                  </div>
                </CustomWidthTooltip>
              </StyledTableCell>
              <StyledTableCell>{row.uniqueId}</StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex justify-between px-[15px] items-center py-2 bg-sideBg relative z-10">
        <p className="text-sideBarText text-[12px]">Page 1 of 10</p>
        <Stack>
          <StyledPagination count={10} defaultPage />
        </Stack>
      </div>
    </TableContainer>
  );
}
