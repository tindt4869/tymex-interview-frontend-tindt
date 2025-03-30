import React from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useSearch, useNavigate } from "@tanstack/react-router";
import { fetchProducts } from "../api/productApi";
import { Row, Col, Button, Space, Flex } from "antd";
import Filters from "../components/Filters";
import ProductList from "../components/ProductList";
import ProductListError from "../components/ProductListError";
import ProductListPending from "../components/ProductListPending";
import { refetchIntervalMs } from "../constants/product";
import { IFilters } from "../types";
import { createStyles } from "antd-style";

const useStyles = createStyles(() => ({
  marketplace: {
    marginTop: 64,
  },
}));

const Marketplace: React.FC = () => {
  const search = useSearch({ from: "/" }) as IFilters;
  const navigate = useNavigate({ from: "/" });
  const { styles } = useStyles();

  const {
    data,
    status,
    error,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["products", search],
    queryFn: ({ pageParam }) => fetchProducts({ ...search, page: pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextPage,
    refetchInterval: refetchIntervalMs,
  });

  const handleFilterChange = (filters: IFilters) => {
    navigate({
      search: (prevFilters: IFilters) => ({ ...prevFilters, ...filters }),
    });
  };

  return (
    <div className={styles.marketplace}>
      <Row gutter={[16, 16]}>
        <Col xs={24} md={6}>
          <Filters onFilterChange={handleFilterChange} />
        </Col>
        <Col xs={24} md={18}>
          {status === "pending" ? (
            <ProductListPending />
          ) : status === "error" ? (
            <ProductListError message={error.message} />
          ) : (
            <>
              <Space direction="vertical" size={16}>
                {data?.pages.map((page) => {
                  return (
                    <React.Fragment key={page.nextPage}>
                      <ProductList products={page.data || []} />
                    </React.Fragment>
                  );
                })}
              </Space>
              <Flex justify="center" style={{ marginTop: 32 }}>
                <Button
                  loading={isFetchingNextPage}
                  type="primary"
                  onClick={() => fetchNextPage()}
                  disabled={!hasNextPage || isFetchingNextPage}
                  style={{ minWidth: 300 }}
                >
                  View more
                </Button>
              </Flex>
            </>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default Marketplace;
