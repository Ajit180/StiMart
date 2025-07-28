import React, { useState, useEffect } from "react";
import { useCreateProduct } from "@/hooks/api/product/useProductCreate";
import { useQueryClient } from "@tanstack/react-query";
import { getPreginedUrl, uploadImageToAWSpresignedUrl } from "@/api/Presigned";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useAuthStore from "@/hooks/Store/useAuth";
import { useGetAllCategory } from "@/hooks/api/Category/useGetAllCategory";

const CreateProduct = () => {
  const [productForm, setProductForm] = useState({
    name: "",
    description: "",
    price: "",
    images: [], // array of uploaded image URLs
    stock: "",
    brand: "",
    rating: "",
    categoryId: "",
  });

  const { token } = useAuthStore();
  const [files, setFiles] = useState([]); // store multiple files
  const [isImageUploaded, setIsImageUploaded] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [open, setOpen] = useState(false);

  const {
    data: createdata,
    isPending,
    isSuccess,
    error,
    createProductmutation,
  } = useCreateProduct();

  const { data: categories = []} = useGetAllCategory();


  const handleUploadImages = async () => {
    if (!files.length) return alert("Please select images");
    if (files.length > 4) return alert("You can only upload up to 4 images");

    setUploading(true);
    const uploadedUrls = [];

    try {
      for (let file of files) {
        const presignedUrl = await getPreginedUrl({ token });
        await uploadImageToAWSpresignedUrl({ url: presignedUrl.data, file });
        const uploadedUrl = presignedUrl.data.split("?")[0];
        uploadedUrls.push(uploadedUrl);
      }

      console.log("Uploaded Urls", uploadedUrls);

      setProductForm((prev) => ({
        ...prev,
        images: uploadedUrls,
      }));

      console.log("images", productForm.images);

      setIsImageUploaded(true);
    } catch (err) {
      alert("Image upload failed");
    } finally {
      setUploading(false);
    }
  };

  // 🟢 Submit product
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isImageUploaded) return alert("Upload image before submitting");
    await createProductmutation(productForm);
  };

  useEffect(() => {
    if (isSuccess) {
      alert("✅ Product created successfully");
      setProductForm({
        name: "",
        description: "",
        price: "",
        images: [],
        categoryId: "",
        stock: "",
        brand: "",
        rating: "",
      });

      setIsImageUploaded(false);
      setOpen(false);
      setFiles([]);
    }
  }, [isSuccess]);

  console.log("productform", productForm);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className="bg-blue-600 hover:bg-blue-700 text-white"
          onClick={() => setOpen(true)}
        >
          + Add Product
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Create New Product</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col gap-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              value={productForm.name}
              onChange={(e) =>
                setProductForm({ ...productForm, name: e.target.value })
              }
              required
            />
          </div>

          <div className="flex flex-col gap-y-2">
            <Label htmlFor="description">Description</Label>
            <Input
              id="description"
              type="text"
              value={productForm.description}
              onChange={(e) =>
                setProductForm({ ...productForm, description: e.target.value })
              }
              required
            />
          </div>

          <div className="flex flex-col gap-y-2">
            <Label htmlFor="price">Price</Label>
            <Input
              id="price"
              type="number"
              value={productForm.price}
              onChange={(e) =>
                setProductForm({ ...productForm, price: e.target.value })
              }
              required
            />
          </div>

          <div className="flex flex-col gap-y-2">
            <Label htmlFor="stock">Stock</Label>
            <Input
              id="stock"
              type="number"
              value={productForm.stock}
              onChange={(e) =>
                setProductForm({ ...productForm, stock: e.target.value })
              }
              required
            />
          </div>

          <div className="flex flex-col gap-y-2">
            <Label htmlFor="brand">Brand</Label>
            <Input
              id="brand"
              type="text"
              value={productForm.brand}
              onChange={(e) =>
                setProductForm({ ...productForm, brand: e.target.value })
              }
              required
            />
          </div>

          <div className="flex flex-col gap-y-2">
            <Label htmlFor="rating" 
            className="text-sm font-medium"
            >Rating</Label>
            <Input
              id="rating"
              type="number"
              value={productForm.rating}
              onChange={(e) =>
                setProductForm({ ...productForm, rating: e.target.value })
              }
              required
               placeholder="Enter your Rating 1 to 5 only"
            />
          </div>

          <div className="hidden">
            <Label htmlFor="categoryId">Category ID</Label>
            <Input
              id="categoryId"
              type="text"
              value={productForm.categoryId}
              onChange={(e) =>
                setProductForm({ ...productForm, categoryId: e.target.value })
              }
              required
            />
          </div>

          {/* dropdown for select category */}
          <div className="flex flex-col gap-y-2">
            <Label htmlFor="categoryId">Category</Label>
            <select
              id="categoryId"
              value={productForm.categoryId}
              onChange={(e) =>
                setProductForm({ ...productForm, categoryId: e.target.value })
              }
              required
              className="w-full border rounded px-2 py-1"
            >
              <option value="">Select Category</option>
              {(categories?.category || []).map((cat) => (
                <option key={cat.id} value={cat._id}>
                  {" "}
                  {/* here i set id as value and selecting name of category */}
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          {/* 🟦 File Upload */}
          <div className="gap-y-2">
            <Label htmlFor="image" className={"py-2"}>Upload up to 4 images</Label>
            <Input
              id="image"
              type="file"
              accept="image/*"
              multiple
              onChange={(e) => {
                const selected = Array.from(e.target.files);
                if (selected.length > 4) {
                  alert("You can upload up to 4 images only");
                  return;
                }
                setFiles(selected);
                setIsImageUploaded(false);
              }}
              className="py-2"
            />
            <Button
              type="button"
              onClick={handleUploadImages}
              className="mt-4"
              disabled={!files.length || uploading}
            >
              {uploading ? "Uploading..." : "Upload Images"}
            </Button>
            {isImageUploaded && (
              <div className="flex gap-2 mt-2">
                {productForm.images.map((url, index) => (
                  <img
                    key={index}
                    src={url}
                    alt={`Uploaded ${index}`}
                    className="w-20 h-20 object-cover rounded px-1"
                  />
                ))}
                <p className="text-green-600 text-sm mt-2">
                  ✅ All images uploaded
                </p>
              </div>
            )}

            {/* {isImageUploaded && (
              <p className="text-green-600 text-sm mt-2">
                ✅ All images uploaded
              </p>
            )} */}
          </div>

          {/* 🟢 Submit */}
          <DialogFooter className="flex justify-end gap-2">
            <DialogClose asChild>
              <Button variant="outline" type="button">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" disabled={isPending || !isImageUploaded}>
              {isPending ? "Creating..." : "Create Product"}
            </Button>
          </DialogFooter>

          {error && (
            <p className="text-red-500 text-sm mt-2">
              {error.message || "Something went wrong"}
            </p>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateProduct;
