import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import { Stack } from "@mui/system";
// import TopFlowers from "@/components/flowers/TopFlowers";
import { getter } from "@/ts/utils/Fetcher";
import Flowers from "@/components/flowers";

const FlowersPage: NextPage = () => {
  const [reviewer, setReviewer] = useState<any[]>([]);
  useEffect(() => {
    const getValues = async () => {
      const result = await getter("reviewers?populate=img");
      if (result.ok && result.data) {
        setReviewer(result.data);
      }
    };
    getValues();
  }, []);
  return (
    <Stack>
      {/* <TopFlowers /> */}
      <Flowers />
    </Stack>
  );
};

export default FlowersPage;
