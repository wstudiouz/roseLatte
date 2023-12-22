import { Stack } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import Hero from "../topHero";

import { getter } from "@/ts/utils/Fetcher";
import {
  CafePageListResponseDataItem,
  FoodCategory,
  FoodCategoryListResponseDataItem,
} from "@/ts/REST/api/generated";
import Card from "./foodCard/Card";
import FormComponent from "../customComponent/ReusableForm";
import Reviewer from "../flowers/Reviewers";
import { HeaderContext } from "@/context/headerContext";
import translate from "@/ts/utils/translate";
export default function Cafe() {
  const [page, setPage] = useState<CafePageListResponseDataItem>();
  const [data, setData] = useState<FoodCategoryListResponseDataItem[]>();
  const [reviewer, setReviewer] = useState<any[]>([]);
  const [population] = useState<string[]>(["Hero"]);
  const [populationFoods] = useState<string[]>(["foods.img", "foods.desc"]);

  useEffect(() => {
    const getValues = async () => {
      const result = await getter(`cafe-page?populate=${population.join()}`);
      if (result.ok && result.data) {
        setPage(result.data);
      }
      const foods = await getter(
        `food-categories?populate=${populationFoods.join()}`
      );
      if (foods.ok && foods.data) {
        setData(foods.data);
      }

      const reviewers = await getter("reviewers?populate=img");
      if (reviewers.ok && reviewers.data) {
        setReviewer(reviewers.data);
      }
    };
    getValues();
  }, [population, populationFoods]);

  const { lang } = useContext(HeaderContext);

  return (
    <Stack>
      {page && page.attributes?.Hero && (
        <Hero
          bgImg="/images/coffeehero.png"
          right
          data={page.attributes.Hero}
        />
      )}
      {data &&
        data.length &&
        data
          .filter((item) => item.attributes?.foods?.data?.length)
          .map((e, ind) => {
            if (e.attributes?.foods) {
              const title = e.attributes[`title_${lang}` as keyof FoodCategory];
              return (
                <Card
                  key={ind}
                  right={ind / 2 !== 0}
                  items={e.attributes.foods}
                  title={String(title)}
                />
              );
            }
            return null;
          })}

      <FormComponent
        title={translate("form.cafepage", lang)}
        bg="/images/flowersform.png"
      />
      {reviewer && reviewer.length && <Reviewer reviewer={reviewer} />}
    </Stack>
  );
}
