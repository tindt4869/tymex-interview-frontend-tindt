import React from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useSearch, useNavigate } from "@tanstack/react-router";
import { Row, Col, Spin, Button, Space, Flex } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import Filters from "../components/Filters";
import ProductList from "../components/ProductList";
import { fetchProducts } from "../api/productApi";
import { IFilters } from "../types";

const Marketplace: React.FC = () => {
  const search = useSearch({ from: "/" }) as IFilters;
  const navigate = useNavigate({ from: "/" });

  const { data, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["products", search],
      queryFn: ({ pageParam }) => fetchProducts({ ...search, page: pageParam }),
      initialPageParam: 0,
      getNextPageParam: (lastPage) => lastPage.nextPage,
    });

  const handleFilterChange = (filters: IFilters) => {
    navigate({
      search: (prevFilters: IFilters) => ({ ...prevFilters, ...filters }),
    });
  };

  return (
    <div className="marketplace">
      <Row gutter={[16, 16]}>
        <Col xs={24} md={6}>
          <Filters onFilterChange={handleFilterChange} />
        </Col>
        <Col xs={24} md={18}>
          {isLoading ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                color: "white",
              }}
            >
              <Spin size="large" indicator={<LoadingOutlined spin />} />
            </div>
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
