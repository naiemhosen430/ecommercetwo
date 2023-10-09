import React from "react";
import Item from "../../../Components/Item";

export default function TopItem() {
  return (
    <>
      <div className="p-10 my-10">
        <h1 className="text-center text-3xl p-4 font-bold">Top Items</h1>
        <div className="text-center">
          <Item
            image={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBZsx7p_e6_czcg9ZlKBJkSwDxWvHM3qxN4ROP1UH0EQ&s"
            }
            itemname={"Bike Name"}
            price={"4000"}
            sell={"100"}
            rating={"4.5"}
          />
          <Item
            image={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBZsx7p_e6_czcg9ZlKBJkSwDxWvHM3qxN4ROP1UH0EQ&s"
            }
            itemname={"Bike Name"}
            price={"4000"}
            sell={"100"}
            rating={"4.5"}
          />
          <Item
            image={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBZsx7p_e6_czcg9ZlKBJkSwDxWvHM3qxN4ROP1UH0EQ&s"
            }
            itemname={"Bike Name"}
            price={"4000"}
            sell={"100"}
            rating={"4.5"}
          />
          <Item
            image={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBZsx7p_e6_czcg9ZlKBJkSwDxWvHM3qxN4ROP1UH0EQ&s"
            }
            itemname={"Bike Name"}
            price={"4000"}
            sell={"100"}
            rating={"4.5"}
          />
          <Item
            image={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBZsx7p_e6_czcg9ZlKBJkSwDxWvHM3qxN4ROP1UH0EQ&s"
            }
            itemname={"Bike Name"}
            price={"4000"}
            sell={"100"}
            rating={"4.5"}
          />
          <Item
            image={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBZsx7p_e6_czcg9ZlKBJkSwDxWvHM3qxN4ROP1UH0EQ&s"
            }
            itemname={"Bike Name"}
            price={"4000"}
            sell={"100"}
            rating={"4.5"}
          />
        </div>
      </div>
    </>
  );
}
