import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const Profile = () => {
    const { token, backendUrl } = useContext(ShopContext)
    const [userData, setUserData] = useState(null)
    const [isEditing, setIsEditing] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    })

    const fetchUserProfile = async () => {
        try {
            const response = await axios.post(backendUrl + '/api/user/get-profile', {}, { headers: { token } })
            if (response.data.success) {
                setUserData(response.data.user)
                setFormData({
                    name: response.data.user.name || '',
                    email: response.data.user.email || '',
                    phone: response.data.user.phone || '',
                    address: response.data.user.address || ''
                })
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    const handleUpdateProfile = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(backendUrl + '/api/user/update-profile', formData, { headers: { token } })
            if (response.data.success) {
                toast.success(response.data.message)
                setUserData(response.data.user)
                setIsEditing(false)
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    useEffect(() => {
        if (token) {
            fetchUserProfile()
        }
    }, [token])

    if (!userData) {
        return <div className='min-h-[60vh] flex items-center justify-center'>
             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
        </div>
    }

    return (
        <div className='border-t pt-14 max-w-4xl mx-auto px-4'>
            <div className='text-3xl mb-8 flex items-center gap-2'>
                <p className='text-gray-500'>MY <span className='text-gray-900 font-semibold'>PROFILE</span></p>
                <div className='h-[2px] w-12 bg-gray-700'></div>
            </div>

            <div className='bg-white shadow-sm border rounded-xl overflow-hidden'>
               <div className='p-8'>
                {isEditing ? (
                    <form onSubmit={handleUpdateProfile} className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div className='flex flex-col gap-2'>
                            <label className='text-sm font-medium text-gray-700'>Full Name</label>
                            <input
                                className='w-full border border-gray-300 rounded-lg py-2.5 px-4 outline-none focus:ring-2 focus:ring-black/5 transition-all'
                                type="text"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                            />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='text-sm font-medium text-gray-700'>Email Address</label>
                            <input
                                className='w-full border border-gray-300 rounded-lg py-2.5 px-4 outline-none focus:ring-2 focus:ring-black/5 transition-all'
                                type="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                            />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='text-sm font-medium text-gray-700'>Phone Number</label>
                            <input
                                className='w-full border border-gray-300 rounded-lg py-2.5 px-4 outline-none focus:ring-2 focus:ring-black/5 transition-all'
                                type="text"
                                placeholder="Enter your phone"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            />
                        </div>
                        <div className='flex flex-col gap-2 md:col-span-2'>
                            <label className='text-sm font-medium text-gray-700'>Home Address</label>
                            <textarea
                                className='w-full border border-gray-300 rounded-lg py-2.5 px-4 outline-none focus:ring-2 focus:ring-black/5 transition-all'
                                rows="3"
                                placeholder="Enter your full address"
                                value={formData.address}
                                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                            />
                        </div>
                        <div className='flex gap-4 md:col-span-2 mt-4'>
                            <button type='submit' className='bg-black text-white px-10 py-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors shadow-lg active:scale-95 uppercase tracking-widest'>SAVE CHANGES</button>
                            <button type='button' onClick={() => setIsEditing(false)} className='border border-gray-300 px-10 py-3 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors active:scale-95 uppercase tracking-widest'>CANCEL</button>
                        </div>
                    </form>
                ) : (
                    <div className='flex flex-col gap-8'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                            <div className='space-y-1'>
                                <p className='text-xs font-bold text-gray-400 uppercase tracking-wider'>Full Name</p>
                                <p className='text-lg text-gray-800 font-medium'>{userData.name}</p>
                            </div>
                            <div className='space-y-1'>
                                <p className='text-xs font-bold text-gray-400 uppercase tracking-wider'>Email Address</p>
                                <p className='text-lg text-gray-800 font-medium'>{userData.email}</p>
                            </div>
                            <div className='space-y-1'>
                                <p className='text-xs font-bold text-gray-400 uppercase tracking-wider'>Phone Number</p>
                                <p className='text-lg text-gray-800 font-medium'>{userData.phone || "Not specified"}</p>
                            </div>
                            <div className='space-y-1 md:col-span-2'>
                                <p className='text-xs font-bold text-gray-400 uppercase tracking-wider'>Home Address</p>
                                <p className='text-lg text-gray-800 font-medium'>{userData.address || "Not specified"}</p>
                            </div>
                        </div>
                        <div className='border-t pt-8'>
                            <button onClick={() => setIsEditing(true)} className='bg-black text-white px-10 py-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors shadow-lg active:scale-95 flex items-center gap-2 uppercase tracking-widest'>
                                EDIT CHANGES
                            </button>
                        </div>
                    </div>
                )}
               </div>
            </div>
        </div>
    )
}

export default Profile
