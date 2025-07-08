import React, { useState } from "react";
import { Modal, Button } from "flowbite-react";

interface AddProductModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: {
    title: string;
    description: string;
    price: string;
    image: File | null;
  }) => void;
}

const AddProductModal: React.FC<AddProductModalProps> = ({ open, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    image: null as File | null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ title: "", description: "", price: "", image: null });
    onClose();
  };

  return (
    <Modal show={open} onClose={onClose} size="sm" className="fixed inset-0 z-50  overflow-x-hidden overflow-y-auto bg-black/40 p-10 ">
      <div className="mx-auto my-10  w-full max-w-[500px] bg-white rounded-lg shadow-md ">
        {/* Header */}
        <div className="p-4 border-b border-g">
          <h3 className="text-lg font-semibold text-gray-900">Add New Product</h3>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <div className="space-y-1">
            <label htmlFor="image" className="text-sm font-medium text-gray-700">Product Image</label>
            <input
              id="image"
              type="file"
              accept=".png,.jpg,.jpeg"
              onChange={(e) =>
                setFormData({ ...formData, image: e.target.files?.[0] ?? null })
              }
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
              required
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="title" className="text-sm font-medium text-gray-700">Title</label>
            <input
              id="title"
              type="text"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
              placeholder="Product title"
              required
            />
          </div>

          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <label htmlFor="description" className="text-sm font-medium text-gray-700">Description</label>
              <span className="text-xs text-gray-400">Optional</span>
            </div>
            <textarea
              id="description"
              rows={3}
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
              placeholder="Short description"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="price" className="text-sm font-medium text-gray-700">Price</label>
            <input
              id="price"
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
              placeholder="10000"
              required
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between gap-3 pt-4 border-t">
            <Button color="gray" type="button"  className="text-sm text-gray-700 w-[95px] h-10 border" onClick={onClose}>Cancel</Button>
            <Button type="submit" className="bg-[#5C27FE] hover:bg-[#4821c9] border text-white text-sm font-medium rounded-xs w-[100px] h-10">Add Product</Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddProductModal;
