"use client";

import { ToastContainer, Slide } from "react-toastify";

const iconWrap = "flex h-8 w-8 items-center justify-center rounded-full";

const ToastIcon = ({ type }) => {
    const svgProps = {
        className: "h-4 w-4",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2.5,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": true,
    };

    if (type === "success") {
        return (
            <span className={`${iconWrap} bg-lime-400/15 text-lime-400`}>
                <svg {...svgProps}><path d="M5 13l4 4L19 7" /></svg>
            </span>
        );
    }

    if (type === "info") {
        return (
            <span className={`${iconWrap} bg-lime-200/10 text-lime-200`}>
                <svg {...svgProps}>
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 11v5M12 8h.01" />
                </svg>
            </span>
        );
    }

    if (type === "error") {
        return (
            <span className={`${iconWrap} bg-red-500/15 text-red-400`}>
                <svg {...svgProps}>
                    <path d="M4 7h16M10 11v6M14 11v6M6 7l1 12a2 2 0 002 2h6a2 2 0 002-2l1-12M9 7V4h6v3" />
                </svg>
            </span>
        );
    }

    if (type === "warning") {
        return (
            <span className={`${iconWrap} bg-amber-400/15 text-amber-400`}>
                <svg {...svgProps}>
                    <path d="M12 4l9 16H3L12 4zM12 10v4M12 17h.01" />
                </svg>
            </span>
        );
    }

    return null;
};

const AppToastContainer = () => {
    return (
        <ToastContainer
            position="bottom-center"
            autoClose={2200}
            transition={Slide}
            newestOnTop
            limit={3}
            closeOnClick
            pauseOnHover
            draggable
            closeButton={false}
            theme="dark"
            icon={({ type }) => <ToastIcon type={type} />}
            toastClassName="fit-toast"
        />
    );
};

export default AppToastContainer;