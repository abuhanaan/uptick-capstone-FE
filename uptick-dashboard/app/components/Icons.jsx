import React from 'react'

export function CloseIcon({stroke, fill}) {
    return (
        <svg width="25" height="24" viewBox="0 0 25 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
            <path d="M23.5246 11.9996C23.5246 5.91067 18.5885 0.974609 12.4996 0.974609C6.41067 0.974609 1.47461 5.91067 1.47461 11.9996C1.47461 18.0885 6.41067 23.0246 12.4996 23.0246C18.5885 23.0246 23.5246 18.0885 23.5246 11.9996Z" stroke={stroke} strokeWidth="1.2" strokeMiterlimit="10" />
            <path d="M8.75 8.25L16.25 15.75" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" />
            <path d="M16.25 8.25L8.75 15.75" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" />
        </svg>

    )
}

export function PreviewIcon() {
    return (
        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.3866 8.49995C10.3866 9.81995 9.31995 10.8866 7.99995 10.8866C6.67995 10.8866 5.61328 9.81995 5.61328 8.49995C5.61328 7.17995 6.67995 6.11328 7.99995 6.11328C9.31995 6.11328 10.3866 7.17995 10.3866 8.49995Z" stroke="#51526C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.9999 14.0138C10.3532 14.0138 12.5466 12.6271 14.0732 10.2271C14.6732 9.28713 14.6732 7.70713 14.0732 6.76713C12.5466 4.36713 10.3532 2.98047 7.9999 2.98047C5.64656 2.98047 3.45323 4.36713 1.92656 6.76713C1.32656 7.70713 1.32656 9.28713 1.92656 10.2271C3.45323 12.6271 5.64656 14.0138 7.9999 14.0138Z" stroke="#51526C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}
