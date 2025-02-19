import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Hero = () => {
  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    refferCode: '',
    refferName: '',
  });

  const imgUrl =
    'https://s3-alpha-sig.figma.com/img/fb39/0c4b/10470aa903b54e8e9e856c5046a0fc6f?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=GDkQrnBiiBGoKMxFXGiGJYL7lPGowyCLHaJi6xMY2xW3M8u2x8atHGX8Ph3MKy3tzYWIh1pLm9ajtJFkNJBDvK6a5yOT17HPwHQ83Px~XKWcueHoHSNi79e3pk9rStGcW1MZ6oH87c8Z88KGzu654bOCtxVhc0dvIkydoonUP-fd4QG2md7RXiP9LGOzaD22AB417-t1oD9NA0RJE4aK7m2hpKujLUz7QENtNHQJjDstmbIxxxCavuDlwb2~vJqsuDw9gR2kQ~t0ViVdIjl0mBEQCxlfeTgsi0SeHUsIFmFUDM5RxkbZsWQsH1MO5h9x5pMtfNy~bHskXI851CnEGg__';

  const handleCloseModal = () => setModal(false);
  const handleOpenModal = () => setModal(true);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://accredian-backend-3zxs.onrender.com/refferal', formData);
      console.log("Form data ",formData);
      
      toast.success('Referred Successfully!', { position: 'top-right' });
      setFormData({ name: '', email: '', phone: '', refferCode: '', refferName: '' });
      handleCloseModal();
    } catch (error) {
      console.error('Error submitting referral:', error);
      toast.error('Failed to refer. Please try again.', { position: 'top-right' });
    }
  };

  return (
    <>
      <div className="relative flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto bg-blue-50 p-8 rounded-md shadow-lg overflow-hidden min-h-[400px]">
        {/* Background Decoration */}
        <div className="absolute inset-0 pointer-events-auto overflow-hidden">
          <img src={imgUrl} alt="" className="absolute left-1 w-20 rotate-90 top-0" />
          <img src={imgUrl} alt="" className="absolute right-2 w-20 rotate-180" />
          <img src={imgUrl} alt="" className="absolute w-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          <img src={imgUrl} alt="" className="absolute bottom-5 right-7 w-20" />
          <div>
<img src="https://s3-alpha-sig.figma.com/img/6da5/530f/c90be82b93f2066608be1f96ef347467?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kt2nl2Y2Gn5sCbDLTBkwktnphsZCx9Z54E-CF1xnYNHO~fgBfyJK2jq-P-5L0uXxnQMbnBDlN8x7esmFGDXEiR2rKZFPxt-288b0PRqay~EGl~4QQwdeDoaMpQL1k6kyDIQ67FdKlWv4cvAAKGZY-IhJjHewm~AGPCkKMt3QpIuxa8DgMxwEUUc~Z31m8cnovkUFstLybQQjBOwdWHx5dYGADOAFeEInyYe1v6SdLIOtOODSwaRxteSCOAeohhxljfeWNdqvn2llibAg1R~tndeeK-Yvj40XAjCGjbzL-FbRajwB25~JH2JXoGg6mqNtpaaUP6d~oqGovQ3nV4OHNA__" alt="" className='absolute top-0 right-0 w-[60%] h-full object-cover' /> 
</div>
 </div>
        

        {/* Content */}
        <div className="md:w-1/2 text-center md:text-left z-10 px-4 md:px-8 space-y-6 mt-8 md:mt-0 max-w-full absolute bottom-10">
          <h1 className="text-5xl font-bold text-gray-800 leading-tight">
            Let’s Learn <br />
            <span className="text-blue-600">& Earn</span>
          </h1>
          <p className="text-gray-600 text-xl">
            Get a chance to win <br />
            <span className="text-xl">up to</span> <span className="text-blue-600 font-bold text-3xl">Rs. 15,000</span>
          </p>
          <button
            type="button"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg text-xl font-semibold shadow-lg hover:bg-blue-700 transition-all"
            onClick={handleOpenModal}
          >
            Refer Now
          </button>
        </div>
      </div>

      {/* Modal */}
      {modal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] md:w-1/3">
            <h2 className="text-2xl font-bold mb-4">Refer a Friend</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter a name"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter email"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter phone number"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700">Refer Code</label>
                <input
                  type="tel"
                  name="refferCode"
                  value={formData.referCode}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter Refer Code"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="block text-gray-700">Refer Name</label>
                <input
                  type="text"
                  name="refferName"
                  value={formData.referName}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter Refer Name"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="mr-2 px-4 py-2 text-gray-700 bg-gray-200 rounded-lg"
                  onClick={handleCloseModal}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
