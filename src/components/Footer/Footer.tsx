import React from 'react'
import { Link } from 'react-router-dom'
import FooterImg from '../../assets/images/footer-image.png'

export default function Footer() {
  return (
    <div className='bg-[#f5f5f5] text-sm text-center text-[rgba(0,0,0,.54)]'>
      <div className='px-4 mx-auto max-w-7xl '>
        <div className='flex justify-between py-10'>
          <div className='lg:col-span-1'>© 2023 Shopee. All Rights Reserved .</div>
          <div className='flex lg:col-span-2'>
            <span>Country & Region:</span>
            <ul className='flex'>
              <li className='inline-block px-[5px] border-r-[0.5px] border-solid border-[rgba(0,0,0,.2)]'>
                <Link to='/'>Singapore</Link>
              </li>
              <li className='inline-block px-[5px] border-r-[0.5px] border-solid border-[rgba(0,0,0,.2)]'>
                <Link to='/'>Indonesia</Link>
              </li>
              <li className='inline-block px-[5px] border-r-[0.5px] border-solid border-[rgba(0,0,0,.2)]'>
                <Link to='/'>Taiwan</Link>
              </li>
              <li className='inline-block px-[5px] border-r-[0.5px] border-solid border-[rgba(0,0,0,.2)]'>
                <Link to='/'>Thailand</Link>
              </li>
              <li className='inline-block px-[5px] border-r-[0.5px] border-solid border-[rgba(0,0,0,.2)]'>
                <Link to='/'>Malaysia</Link>
              </li>
              <li className='inline-block px-[5px] border-r-[0.5px] border-solid border-[rgba(0,0,0,.2)]'>
                <Link to='/'>Vietnam</Link>
              </li>
              <li className='inline-block px-[5px] border-r-[0.5px] border-solid border-[rgba(0,0,0,.2)]'>
                <Link to='/'>Philippines</Link>
              </li>
              <li className='inline-block px-[5px] border-r-[0.5px] border-solid border-[rgba(0,0,0,.2)]'>
                <Link to='/'>Brazil</Link>
              </li>
              <li className='inline-block px-[5px] border-r-[0.5px] border-solid border-[rgba(0,0,0,.2)]'>
                <Link to='/'>México</Link>
              </li>
              <li className='inline-block px-[5px] border-r-[0.5px] border-solid border-[rgba(0,0,0,.2)]'>
                <Link to='/'>Colombia</Link>
              </li>
              <li className='inline-block px-[5px]'>
                <Link to='/'>Chile</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='py-[2.625rem] mb-[1.5625rem] text-[rgba(0,0,0,.65)] text-xs '>
          <div className='mb-10 flex justify-center text-[rgba(0,0,0,.54)]'>
            <div className='capitalize px-[1.5625rem] border-r border-solid border-[rgba(0,0,0,.09)]'>
              PRIVACY POLICY
            </div>
            <div className='capitalize px-[1.5625rem] border-r border-solid border-[rgba(0,0,0,.09)]'>
              TERM OF SERVICE
            </div>
            <div className='capitalize px-[1.5625rem] border-r border-solid border-[rgba(0,0,0,.09)]'>
              SHIPPING POLICY
            </div>
            <div className='capitalize px-[1.5625rem]'>VIOLATION</div>
          </div>
          <div className='flex justify-center'>
            <img srcSet={`${FooterImg} 2x`} alt='Footer img' />
          </div>
          <div className='mt-2 mb-[1.5625rem]'>Shopee Company Limited</div>
          <div className='mt-2'>
            Floors 4-5-6, Capital Place Building, No. 29, Lieu Giai Street, Ngoc Khanh ward, Ba Dinh District, Hanoi,
            Vietnam
          </div>
          <div className='mt-2'>Person in charge of information management: Nguyen Duc Tri</div>
          <div className='mt-2'>Business Registration Certificate No: 0106773786</div>
          <div className='mt-2'>© 2015 - Copyright belongs to Shopee Company Limited</div>
        </div>
      </div>
    </div>
  )
}
