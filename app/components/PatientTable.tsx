import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, Spinner, getKeyValue} from "@nextui-org/react";
import useSWR, {Fetcher} from "swr";

const fetcher = (...args: [RequestInfo, RequestInit?]): Promise<any> => 
  fetch(...args).then((res) => res.json());


export default function App() {
  const [page, setPage] = React.useState(1);

  const {data, isLoading} = useSWR(`https://demoris.indira.ai/api/v2/mock/patient?page=${page}`, fetcher, {
    keepPreviousData: true,
  });

  const rowsPerPage = 10;

  const pages = React.useMemo(() => {
    return data?.count ? Math.ceil(data.count / rowsPerPage) : 0;
  }, [data?.count, rowsPerPage]);

  console.log(data)
  const loadingState = isLoading || data?.length === 0 ? "loading" : "idle";

  return (
    <Table
      aria-label="Example table with client async pagination"
      bottomContent={
        pages > 0 ? (
          <div className="flex w-full justify-center">
            <Pagination
              isCompact
              showControls
              showShadow
              color="primary"
              page={page}
              total={pages}
              onChange={(page) => setPage(page)}
            />
          </div>
        ) : null
      }
    >
      <TableHeader>
        <TableColumn key="IPCODPACI">Patient</TableColumn>
        <TableColumn key="IPNOMCOMP">Name</TableColumn>
        <TableColumn key="IPDIRECCI">Address</TableColumn>
        <TableColumn key="IPFECNACI">Birth year</TableColumn>
      </TableHeader>
      <TableBody emptyContent={"No Rows to display"}>{[]}</TableBody>
      <TableBody
        items={data}
        loadingContent={<Spinner />}
        loadingState={loadingState}
      >
        {(item:any) => (
          <TableRow key={item?.name}>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
