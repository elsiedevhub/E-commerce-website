import React, { useState } from "react";
import { Modal, Button, Checkbox, Label, } from "flowbite-react";
import { useCart } from "../Context/CartContext";

interface CheckoutModalProps {
  open: boolean;
  onClose: () => void;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ open, onClose }) => {
  const { clearCart } = useCart(); // ✅ clear cart after checkout

  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    country: "",
    phone: "",
    address: "",
  });
  return (
    <Modal show={open} onClose={onClose} size="7xl" position="center"  className="fixed inset-0 z-50  overflow-x-hidden overflow-y-auto bg-black/40 p-10">
      <div className="w-full bg-gray-100 rounded-lg p-6 max-h-[90vh] overflow-y-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left - Checkout Form */}
          <div className="space-y-6">
            <div>
               <div className="space-y-1">
              <label htmlFor="title" className="text-sm font-medium text-gray-700 mb-3">Email</label>
              <input
                id="title"
                type="text"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
                placeholder="Enter your email"
                required
              />
           </div>
              <div className="flex items-center gap-2 mt-2">
                <Checkbox id="subscribe" />
                <Label htmlFor="subscribe">Email me with news and offers</Label>
              </div>
            </div>
            <div className="flex gap-4">
                  {/* First Name */}
                  <div className="w-1/2 space-y-1">
                    <label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full h-10 border border-gray-300 rounded-md px-3 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
                      placeholder="First name"
                      required
                    />
                  </div>

                  {/* Last Name */}
                  <div className="w-1/2 space-y-1">
                    <label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full h-10 border border-gray-300 rounded-md px-3 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
                      placeholder="Last name"
                      required
                    />
                  </div>
              </div>

            <div className="space-y-1">
              <label htmlFor="title" className="text-sm font-medium text-gray-700">Country</label>
              <input
                id="country"
                type="text"
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
                placeholder="Enter your country"
                required
              />
           </div>

            <div className="space-y-1">

              <label htmlFor="title" className="text-sm font-medium text-gray-700">Phone Number</label>
              <input
                id="phone"
                type="text"
                inputMode="numeric"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
                placeholder="Phone number"
                required
              />
           </div>
            <div className="space-y-1">
              <label htmlFor="title" className="text-sm font-medium text-gray-700">Address</label>
              <input
                id="address"
                type="text"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
                placeholder="Enter your address"
                required
              />
            </div>  

            
          </div>

          {/* Right - Order Summary */}
          <div className="space-y-6">
            <div className="bg-white p-4 ">

            <h2 className="text-lg font-semibold">Order summary</h2>
            </div>

            <div className="space-y-4 bg-white p-4">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>NGN 10,000.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Shipping</span>
                <span>NGN 4,000.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Estimated taxes</span>
                <span>NGN 0.00</span>
              </div>
              <hr />
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>NGN 36,500.00</span>
              </div>
            </div>

            <Button
              className="w-full bg-[#5C27FE] hover:bg-[#4821c9] text-white"
              onClick={() => {
                const { email, firstName, address } = formData;

                if (!email || !firstName || !address) {
                  alert("Please fill in all required fields.");
                  return;
                }

                alert("✅ Payment successful. Thank you for your order!");

                clearCart();     // Clear cart
                onClose();       // Close modal
              }}
            >
              PAY NOW
          </Button>

          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CheckoutModal;
