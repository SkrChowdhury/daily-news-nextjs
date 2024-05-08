import { getCategoryNews } from "@/utils/getCategoryNews";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";

const DynamicNewsPage = async ({ params, searchParams }) => {
  const { data } = await getCategoryNews(searchParams.category);
  return (
    <div className="my-5">
      <h1>
        Total <span className="font-bold">{searchParams.category}</span> News :{" "}
        {data.length}
      </h1>
      <Grid
        className="mt-5"
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {data.map((news) => (
          <Grid key={news?.id} item xs={6}>
            <Card>
              <CardActionArea>
                <CardMedia>
                  <Image height={100} width={800} src={news?.thumbnail_url} width={800} alt="tip news" />
                </CardMedia>
                <CardContent>
                  <p className="w-[100px] bg-red-800 px-2 my-5 rounded text-white">
                    {news?.category}
                  </p>
                  <Typography gutterBottom>
                  {news?.title}
                  </Typography>
                  <Typography gutterBottom className="my-3">
                    By {news?.author?.name} - {news?.author?.published_date}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                   {news?.details}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default DynamicNewsPage;
