import {
  Button,
  Checkbox,
  Pagination,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  styled,
} from "@mui/material";
import {
  CheckBox,
  CopyAllOutlined,
  CropSquareOutlined,
} from "@mui/icons-material";

import CopyInput from "./CopyInput";

const columns = [
  { field: "name", headerName: "Name", width: 250 },
  { field: "id", headerName: "CPID", width: 200 },
  { field: "status", headerName: "Status", width: 180 },
  { field: "config_url", headerName: "Configuration URL", width: 400 },
  { field: "action", headerName: "Action", width: 200 },
];

const rows = [
  {
    id: "GOEC001",
    chargeStation: "Charge Zone",
    hubStatus: true,
    configurationUrl: "ws://goeccms.numocity.com:9033/ocpp/go1",
    action: "fgpu-cr",
  },
];

const StyledTableCell = styled(TableCell)(({ color }) => ({
  color: color || "#A5AFBA",
  padding: 5,
  width: 10,
  borderTop: "1px solid #161616",
  borderBottom: "1px solid #161616",
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

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function BpCheckbox() {
  return (
    <Checkbox
      {...label}
      icon={<CropSquareOutlined sx={{ color: "#8A8A8A" }} />}
      checkedIcon={<CheckBox sx={{ color: "#8A8A8A" }} />}
    />
  );
}

export default function EMSPTable() {
  return (
    <div className="pt-10">
      <TableContainer style={{ borderRadius: 10, background: "#222222" }}>
        <Table>
          <TableHead
            style={{
              backgroundColor: "#1C1E1F",
              height: 10,
            }}
          >
            <TableRow>
              <StyledTableCell>
                <BpCheckbox />
              </StyledTableCell>
              {columns.map((column, index) => (
                <StyledTableCell
                  key={index}
                  color="#A5AFBA"
                  width={column.width}
                >
                  {column.headerName}
                </StyledTableCell>
              ))}
              <StyledTableCell width={10} />
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id} style={{ color: "red" }}>
                <StyledTableCell>
                  <BpCheckbox />
                </StyledTableCell>

                <StyledTableCell>{row.chargeStation}</StyledTableCell>
                <StyledTableCell>
                  <div className="flex gap-5 items-center">
                    <span className="bg-[#161616] text-[#737373] px-2 py-1 border-[1px] border-[#616161] hover:border-[#737373]  rounded-md">
                      {row.id}
                    </span>
                    <Button
                      sx={{
                        color: "white",
                        padding: 0,
                        minWidth: "max-content",
                      }}
                    >
                      <CopyAllOutlined />
                    </Button>
                  </div>
                </StyledTableCell>
                <StyledTableCell>
                  <span
                    className={`w-[65px] rounded-md relative px-3 py-1 pl-6 text-[12px]  font-normal before:absolute before:content-['']  before:w-[10px] before:h-[10px] before:left-[7px] before:top-[50%] before:-translate-y-1/2 before:rounded-[3px] ${
                      row?.hubStatus
                        ? "bg-bgSuccess text-textSuccess before:bg-[#29845A]"
                        : "bg-bgWarning text-textWarning before:bg-[#B28400]"
                    } `}
                  >
                    {row?.hubStatus ? "Active" : "Inactive"}
                  </span>
                </StyledTableCell>
                <StyledTableCell>
                  <div className=" max-w-[360px] text-[#B5B8C5]">
                    <p>{row?.configurationUrl}</p>
                  </div>
                </StyledTableCell>
                <StyledTableCell>
                  <Button
                    sx={{
                      bgcolor: "white",
                      color: "#303030",
                      textTransform: "none",
                      fontSize: "10px",
                      "&:hover": {
                        bgcolor: "white",
                        color: "#303030",
                      },
                    }}
                    size="small"
                  >
                    Remove
                  </Button>
                </StyledTableCell>
                <StyledTableCell width={10} />
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="flex justify-between px-[15px] py-2 bg-sideBg items-center h-[32px] ">
          <p className="text-sideBarText text-[12px]">Page 1 of 10</p>
          <Stack>
            <StyledPagination count={10} defaultPage={1} />
          </Stack>
        </div>
      </TableContainer>
    </div>
  );
}
