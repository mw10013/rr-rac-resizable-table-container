import {
  Cell,
  Column,
  ColumnResizer,
  Group,
  ResizableTableContainer,
  Row,
  Table,
  TableBody,
  TableHeader,
} from "react-aria-components";
import type {
  CellProps,
  ColumnProps,
  RowProps,
  SortDescriptor,
} from "react-aria-components";
// import ArrowUpIcon from "@spectrum-icons/ui/ArrowUpSmall";
import { useMemo, useState } from "react";

// https://react-spectrum.adobe.com/react-aria/examples/stock-table.html

export const stocks = [
  {
    id: 1,
    symbol: "PAACR",
    name: "Pacific Special Acquisition Corp.",
    sector: "Finance",
    marketCap: "n/a",
    industry: "Business Services",
  },
  {
    id: 2,
    symbol: "DCM",
    name: "NTT DOCOMO, Inc",
    sector: "Technology",
    marketCap: "$96.67B",
    industry: "Radio And Television Broadcasting And Communications Equipment",
  },
  {
    id: 3,
    symbol: "RFEU",
    name: "First Trust RiverFront Dynamic Europe ETF",
    sector: "n/a",
    marketCap: "$52.66M",
    industry: "n/a",
  },
  {
    id: 4,
    symbol: "SODA",
    name: "SodaStream International Ltd.",
    sector: "Consumer Durables",
    marketCap: "$1.13B",
    industry: "Consumer Electronics/Appliances",
  },
  {
    id: 5,
    symbol: "KRA",
    name: "Kraton Corporation",
    sector: "Basic Industries",
    marketCap: "$979.78M",
    industry: "Major Chemicals",
  },
  {
    id: 6,
    symbol: "VRTS",
    name: "Virtus Investment Partners, Inc.",
    sector: "Finance",
    marketCap: "$785.49M",
    industry: "Investment Managers",
  },
  {
    id: 7,
    symbol: "PAH",
    name: "Platform Specialty Products Corporation",
    sector: "Basic Industries",
    marketCap: "$3.52B",
    industry: "Major Chemicals",
  },
  {
    id: 8,
    symbol: "MANH",
    name: "Manhattan Associates, Inc.",
    sector: "Technology",
    marketCap: "$3.27B",
    industry: "Computer Software: Prepackaged Software",
  },
  {
    id: 9,
    symbol: "SAB",
    name: "Saratoga Investment Corp",
    sector: "n/a",
    marketCap: "n/a",
    industry: "n/a",
  },
  {
    id: 10,
    symbol: "THQ",
    name: "Tekla Healthcare Opportunies Fund",
    sector: "n/a",
    marketCap: "$772.41M",
    industry: "n/a",
  },
  {
    id: 11,
    symbol: "MERC",
    name: "Mercer International Inc.",
    sector: "Basic Industries",
    marketCap: "$769.94M",
    industry: "Paper",
  },
  {
    id: 12,
    symbol: "DNI",
    name: "Dividend and Income Fund",
    sector: "n/a",
    marketCap: "$130.45M",
    industry: "n/a",
  },
  {
    id: 13,
    symbol: "NVTR",
    name: "Nuvectra Corporation",
    sector: "Health Care",
    marketCap: "$132.49M",
    industry: "Medical/Dental Instruments",
  },
  {
    id: 14,
    symbol: "NNN",
    name: "National Retail Properties",
    sector: "Consumer Services",
    marketCap: "$5.87B",
    industry: "Real Estate Investment Trusts",
  },
  {
    id: 15,
    symbol: "ZF",
    name: "Virtus Total Return Fund Inc.",
    sector: "n/a",
    marketCap: "$277.82M",
    industry: "n/a",
  },
  {
    id: 16,
    symbol: "WF",
    name: "Woori Bank",
    sector: "Finance",
    marketCap: "$10.29B",
    industry: "Commercial Banks",
  },
  {
    id: 17,
    symbol: "VNQI",
    name: "Vanguard Global ex-U.S. Real Estate ETF",
    sector: "n/a",
    marketCap: "$4.39B",
    industry: "n/a",
  },
  {
    id: 18,
    symbol: "BIOC",
    name: "Biocept, Inc.",
    sector: "Health Care",
    marketCap: "$32.98M",
    industry: "Medical Specialities",
  },
  {
    id: 19,
    symbol: "FTRPR",
    name: "Frontier Communications Corporation",
    sector: "Public Utilities",
    marketCap: "n/a",
    industry: "Telecommunications Equipment",
  },
  {
    id: 20,
    symbol: "EPE",
    name: "EP Energy Corporation",
    sector: "Energy",
    marketCap: "$1.02B",
    industry: "Oil & Gas Production",
  },
  {
    id: 21,
    symbol: "TEO",
    name: "Telecom Argentina Stet - France Telecom S.A.",
    sector: "Public Utilities",
    marketCap: "$4.83B",
    industry: "Telecommunications Equipment",
  },
  {
    id: 22,
    symbol: "FENX",
    name: "Fenix Parts, Inc.",
    sector: "Consumer Services",
    marketCap: "$29.61M",
    industry: "Motor Vehicles",
  },
  {
    id: 23,
    symbol: "KAP",
    name: "KCAP Financial, Inc.",
    sector: "n/a",
    marketCap: "n/a",
    industry: "n/a",
  },
  {
    id: 24,
    symbol: "WING",
    name: "Wingstop Inc.",
    sector: "Consumer Services",
    marketCap: "$875.69M",
    industry: "Restaurants",
  },
  {
    id: 25,
    symbol: "JNP",
    name: "Juniper Pharmaceuticals, Inc.",
    sector: "Health Care",
    marketCap: "$55.3M",
    industry: "Major Pharmaceuticals",
  },
  {
    id: 26,
    symbol: "KNL",
    name: "Knoll, Inc.",
    sector: "Consumer Durables",
    marketCap: "$1.04B",
    industry: "Office Equipment / Supplies / Services",
  },
  {
    id: 27,
    symbol: "GNW",
    name: "Genworth Financial Inc",
    sector: "Finance",
    marketCap: "$1.82B",
    industry: "Life Insurance",
  },
  {
    id: 28,
    symbol: "PBI",
    name: "Pitney Bowes Inc.",
    sector: "Miscellaneous",
    marketCap: "$2.84B",
    industry: "Office Equipment / Supplies / Services",
  },
  {
    id: 29,
    symbol: "USDP",
    name: "USD Partners LP",
    sector: "Transportation",
    marketCap: "$300.48M",
    industry: "Railroads",
  },
  {
    id: 30,
    symbol: "MOFG",
    name: "MidWestOne Financial Group, Inc.",
    sector: "Finance",
    marketCap: "$437.4M",
    industry: "Major Banks",
  },
  {
    id: 31,
    symbol: "DPG",
    name: "Duff & Phelps Global Utility Income Fund Inc.",
    sector: "n/a",
    marketCap: "$626.98M",
    industry: "n/a",
  },
  {
    id: 32,
    symbol: "ATNX",
    name: "Athenex, Inc.",
    sector: "n/a",
    marketCap: "$767.4M",
    industry: "n/a",
  },
  {
    id: 33,
    symbol: "PSA^Y",
    name: "Public Storage",
    sector: "n/a",
    marketCap: "n/a",
    industry: "n/a",
  },
  {
    id: 34,
    symbol: "GPIAU",
    name: "GP Investments Acquisition Corp.",
    sector: "Consumer Durables",
    marketCap: "n/a",
    industry: "Home Furnishings",
  },
  {
    id: 35,
    symbol: "TNP^C",
    name: "Tsakos Energy Navigation Ltd",
    sector: "n/a",
    marketCap: "n/a",
    industry: "n/a",
  },
  {
    id: 36,
    symbol: "EFSC",
    name: "Enterprise Financial Services Corporation",
    sector: "Finance",
    marketCap: "$965.1M",
    industry: "Major Banks",
  },
  {
    id: 37,
    symbol: "HIIQ",
    name: "Health Insurance Innovations, Inc.",
    sector: "Finance",
    marketCap: "$392.38M",
    industry: "Specialty Insurers",
  },
  {
    id: 38,
    symbol: "NMK^B",
    name: "Niagara Mohawk Holdings, Inc.",
    sector: "Public Utilities",
    marketCap: "n/a",
    industry: "Power Generation",
  },
  {
    id: 39,
    symbol: "ETH",
    name: "Ethan Allen Interiors Inc.",
    sector: "Consumer Durables",
    marketCap: "$822.58M",
    industry: "Home Furnishings",
  },
  {
    id: 40,
    symbol: "TBPH",
    name: "Theravance Biopharma, Inc.",
    sector: "Health Care",
    marketCap: "$1.97B",
    industry: "Major Pharmaceuticals",
  },
  {
    id: 41,
    symbol: "PNF",
    name: "PIMCO New York Municipal Income Fund",
    sector: "n/a",
    marketCap: "$99.42M",
    industry: "n/a",
  },
  {
    id: 42,
    symbol: "KOP",
    name: "Koppers Holdings Inc.",
    sector: "Basic Industries",
    marketCap: "$716.78M",
    industry: "Forest Products",
  },
  {
    id: 43,
    symbol: "SSB",
    name: "South State Corporation",
    sector: "Finance",
    marketCap: "$2.55B",
    industry: "Major Banks",
  },
  {
    id: 44,
    symbol: "AUY",
    name: "Yamana Gold Inc.",
    sector: "Basic Industries",
    marketCap: "$2.32B",
    industry: "Precious Metals",
  },
  {
    id: 45,
    symbol: "TWNK",
    name: "Hostess Brands, Inc.",
    sector: "Consumer Non-Durables",
    marketCap: "$2.09B",
    industry: "Packaged Foods",
  },
  {
    id: 46,
    symbol: "RGLS",
    name: "Regulus Therapeutics Inc.",
    sector: "Health Care",
    marketCap: "$50.52M",
    industry: "Major Pharmaceuticals",
  },
  {
    id: 47,
    symbol: "ULBI",
    name: "Ultralife Corporation",
    sector: "Miscellaneous",
    marketCap: "$102.3M",
    industry: "Industrial Machinery/Components",
  },
  {
    id: 48,
    symbol: "NFJ",
    name: "AllianzGI NFJ Dividend, Interest & Premium Strategy Fund",
    sector: "Finance",
    marketCap: "$1.24B",
    industry: "Finance: Consumer Services",
  },
  {
    id: 49,
    symbol: "EQC",
    name: "Equity Commonwealth",
    sector: "Consumer Services",
    marketCap: "$3.93B",
    industry: "Real Estate Investment Trusts",
  },
  {
    id: 50,
    symbol: "MARK",
    name: "Remark Holdings, Inc.",
    sector: "Consumer Services",
    marketCap: "$57.31M",
    industry: "Telecommunications Equipment",
  },
];

export function StockTableExample() {
  let [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: "symbol",
    direction: "ascending",
  });
  let sortedItems = useMemo(() => {
    return stocks.sort((a, b) => {
      let first = a[sortDescriptor.column];
      let second = b[sortDescriptor.column];
      let cmp = first.localeCompare(second);
      if (sortDescriptor.direction === "descending") {
        cmp *= -1;
      }
      return cmp;
    });
  }, [sortDescriptor]);

  return (
    <>
      <h3>
        StockTableExample (
        <a href="https://react-spectrum.adobe.com/react-aria/examples/stock-table.html">
          https://react-spectrum.adobe.com/react-aria/examples/stock-table.html
        </a>
        )
      </h3>
      <div className="bg-gradient-to-r from-indigo-500 to-violet-500 p-8 rounded-lg flex items-center justify-center md:col-span-2">
        <ResizableTableContainer className="max-h-[280px] w-full overflow-auto scroll-pt-[2.321rem] relative bg-white rounded-lg shadow text-gray-600">
          <Table
            aria-label="Stocks"
            selectionMode="multiple"
            selectionBehavior="replace"
            sortDescriptor={sortDescriptor}
            onSortChange={setSortDescriptor}
            className="border-separate border-spacing-0"
          >
            <TableHeader>
              <StockColumn id="symbol" allowsSorting>
                Symbol
              </StockColumn>
              <StockColumn
                id="name"
                isRowHeader
                allowsSorting
                defaultWidth="3fr"
              >
                Name
              </StockColumn>
              <StockColumn id="marketCap" allowsSorting>
                Market Cap
              </StockColumn>
              <StockColumn id="sector" allowsSorting>
                Sector
              </StockColumn>
              <StockColumn id="industry" allowsSorting defaultWidth="2fr">
                Industry
              </StockColumn>
            </TableHeader>
            <TableBody items={sortedItems}>
              {(item) => (
                <StockRow>
                  <StockCell>
                    <span className="font-mono bg-slate-100 border border-slate-200 rounded px-1 group-selected:bg-slate-700 group-selected:border-slate-800">
                      ${item.symbol}
                    </span>
                  </StockCell>
                  <StockCell className="font-semibold">{item.name}</StockCell>
                  <StockCell>{item.marketCap}</StockCell>
                  <StockCell>{item.sector}</StockCell>
                  <StockCell>{item.industry}</StockCell>
                </StockRow>
              )}
            </TableBody>
          </Table>
        </ResizableTableContainer>
      </div>
    </>
  );
}

function StockColumn(props: ColumnProps & { children: React.ReactNode }) {
  return (
    <Column
      {...props}
      className="sticky top-0 p-0 border-0 border-b border-solid border-slate-300 bg-slate-200 font-bold text-left cursor-default first:rounded-tl-lg last:rounded-tr-lg whitespace-nowrap outline-none"
    >
      {({ allowsSorting, sortDirection }) => (
        <div className="flex items-center pl-4 py-1">
          <Group
            role="presentation"
            tabIndex={-1}
            className="flex flex-1 items-center overflow-hidden outline-none rounded focus-visible:ring-2 ring-slate-600"
          >
            <span className="flex-1 truncate">{props.children}</span>
            {allowsSorting && (
              <span
                className={`ml-1 w-4 h-4 flex items-center justify-center transition ${
                  sortDirection === "descending" ? "rotate-180" : ""
                }`}
              >
                {/* {sortDirection && <ArrowUpIcon width={8} height={10} />} */}
                {sortDirection && "↑"}
              </span>
            )}
          </Group>
          <ColumnResizer className="w-px px-[8px] py-1 h-5 bg-clip-content bg-slate-400 cursor-col-resize rounded resizing:bg-slate-800 resizing:w-[2px] resizing:pl-[7px] focus-visible:ring-2 ring-slate-600 ring-inset" />
        </div>
      )}
    </Column>
  );
}

function StockRow<T extends object>(props: RowProps<T>) {
  return (
    <Row
      {...props}
      className="even:bg-slate-100 selected:bg-slate-600 selected:text-white cursor-default group outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-slate-600 focus-visible:-outline-offset-4 selected:focus-visible:outline-white"
    />
  );
}

function StockCell(props: CellProps) {
  return (
    <Cell
      {...props}
      className={`px-4 py-2 truncate ${props.className} focus-visible:outline focus-visible:outline-2 focus-visible:outline-slate-600 focus-visible:-outline-offset-4 group-selected:focus-visible:outline-white`}
    />
  );
}
