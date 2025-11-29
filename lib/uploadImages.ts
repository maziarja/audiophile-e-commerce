import fs from "fs";
import path from "path";
import data from "../data.json";
import cloudinary from "./cloudinary";

// root folder where your images live
const ROOT = path.join(process.cwd(), "public", "assets");

async function uploadImage(localPath: string, cloudPath: string) {
  try {
    const res = await cloudinary.uploader.upload(localPath, {
      folder: cloudPath, // cloud folder
      use_filename: true,
      unique_filename: false,
      overwrite: true,
    });

    return res.secure_url;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
}

async function processData() {
  try {
    const newData = [];

    for (const product of data) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const updatedProduct: any = JSON.parse(JSON.stringify(product));
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const p: any = product;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const u: any = updatedProduct;
      const category = p.category;
      const slug = p.slug;

      const imageSections = ["image", "categoryImage", "gallery"];

      // Handle main images, categoryImage, and gallery
      for (const section of imageSections) {
        if (!p[section]) continue;

        if (section === "gallery") {
          for (const key of Object.keys(p.gallery)) {
            for (const device of ["mobile", "tablet", "desktop"]) {
              const relativePath = p.gallery[key][device].replace(
                /^\.\/assets\//,
                ""
              );
              const localPath = path.join(
                process.cwd(),
                "public",
                "assets",
                relativePath
              );
              const cloudPath = `audiophile-ecommerce/${category}/${slug}/${device}`;

              const url = await uploadImage(localPath, cloudPath);
              u.gallery[key][device] = url;
            }
          }
        } else {
          for (const device of ["mobile", "tablet", "desktop"]) {
            const relativePath = p[section][device].replace(
              /^\.\/assets\//,
              ""
            );
            const localPath = path.join(
              process.cwd(),
              "public",
              "assets",
              relativePath
            );
            const cloudPath = `audiophile-ecommerce/${category}/${slug}/${device}`;

            const url = await uploadImage(localPath, cloudPath);
            u[section][device] = url;
          }
        }
      }

      // Handle "others" section
      if (p.others && Array.isArray(p.others)) {
        for (let i = 0; i < p.others.length; i++) {
          const otherItem = p.others[i];

          for (const device of ["mobile", "tablet", "desktop"]) {
            const relativePath = otherItem.image[device].replace(
              /^\.\/assets\//,
              ""
            );
            const localPath = path.join(
              process.cwd(),
              "public",
              "assets",
              relativePath
            );
            const cloudPath = `audiophile-ecommerce/${category}/${slug}/others/${otherItem.slug}/${device}`;

            const url = await uploadImage(localPath, cloudPath);
            u.others[i].image[device] = url;
          }
        }
      }

      newData.push(u);
    }

    fs.writeFileSync(
      "data-with-cloudinary.json",
      JSON.stringify(newData, null, 2)
    );
    console.log("🎉 Done! New file created: data-with-cloudinary.json");
  } catch (error) {
    console.error("Error processing data:", error);
  }
}

processData();

process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
});
