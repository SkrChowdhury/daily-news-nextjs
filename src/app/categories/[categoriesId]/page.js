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
        <Grid item xs={6}>
          <Card>
            <CardActionArea>
              <CardMedia>
                {/* <Image src={topNews2} width={800} alt="tip news" /> */}
              </CardMedia>
              <CardContent>
                <p className="w-[100px] bg-red-800 px-2 my-5 rounded text-white">
                  Technology
                </p>
                <Typography gutterBottom>
                  Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
                  Again
                </Typography>
                <Typography gutterBottom className="my-3">
                  By Sakkar Chowdhury - Mar 18 2024
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  It is a long established fact that a reader will be distracted
                  by the readble content of a page when looking at its
                  layout...........
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default DynamicNewsPage;
