"use client";
import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext } from "react";

const Logo = () => {
	const { theme } = useContext(ThemeContext);
	const fillColor = theme === "dark" ? "#F8FAFC" : "#020617";
	return (
		<svg
			width="85"
			height="44"
			viewBox="0 0 85 44"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M48.384 18.4981H46.0215V6.20793H48.1578L48.4091 8.09293C49.1883 6.68546 50.7466 5.85606 52.4808 5.85606C55.723 5.85606 57.2058 7.8416 57.2058 10.9833V18.4981H54.8433V11.5111C54.8433 9.02286 53.6871 8.01753 51.8775 8.01753C49.6658 8.01753 48.384 9.60093 48.384 11.9886V18.4981Z"
				fill={fillColor}
			/>
			<path
				d="M36.6914 18.7997C34.0524 18.7997 32.4941 17.3169 32.4941 15.08C32.4941 12.818 34.1781 11.4105 37.0684 11.1843L40.9389 10.8827V10.5309C40.9389 8.46993 39.7074 7.74106 38.0486 7.74106C36.0631 7.74106 34.9321 8.62073 34.9321 10.1036H32.8711C32.8711 7.54 34.9823 5.85606 38.1491 5.85606C41.1903 5.85606 43.2512 7.4646 43.2512 10.7822V18.4981H41.2405L40.9892 16.5126C40.3609 17.9201 38.6769 18.7997 36.6914 18.7997ZM37.37 16.965C39.6069 16.965 40.9641 15.5073 40.9641 13.195V12.5415L37.8224 12.7929C35.7363 12.9939 34.8818 13.7982 34.8818 15.0046C34.8818 16.3115 35.8369 16.965 37.37 16.965Z"
				fill={fillColor}
			/>
			<path
				d="M31.8752 6.1074V8.26887H30.8196C28.5828 8.26887 27.2004 9.62607 27.2004 11.9886V18.4981H24.8379V6.23307H27.0496L27.2004 8.09294C27.7031 6.81114 28.9346 5.9566 30.6186 5.9566C31.0458 5.9566 31.3977 6.00687 31.8752 6.1074Z"
				fill={fillColor}
			/>
			<path
				d="M15.5098 18.7997C12.8708 18.7997 11.3125 17.3169 11.3125 15.08C11.3125 12.818 12.9964 11.4105 15.8868 11.1843L19.7573 10.8827V10.5309C19.7573 8.46993 18.5258 7.74106 16.867 7.74106C14.8814 7.74106 13.7504 8.62073 13.7504 10.1036H11.6895C11.6895 7.54 13.8007 5.85606 16.9675 5.85606C20.0086 5.85606 22.0696 7.4646 22.0696 10.7822V18.4981H20.0589L19.8076 16.5126C19.1792 17.9201 17.4953 18.7997 15.5098 18.7997ZM16.1884 16.965C18.4252 16.965 19.7824 15.5073 19.7824 13.195V12.5415L16.6408 12.7929C14.5547 12.9939 13.7002 13.7982 13.7002 15.0046C13.7002 16.3115 14.6552 16.965 16.1884 16.965Z"
				fill={fillColor}
			/>
			<path
				d="M2.36253 18.4981H0V0H2.36253V11.9886L7.81647 6.20793H10.7822L6.08227 11.1089L10.7571 18.4981H8.04267L4.4486 12.818L2.36253 15.0046V18.4981Z"
				fill={fillColor}
			/>
			<path
				d="M76.3176 43.6314H73.9551V25.1333H76.3176V37.1219L81.7715 31.3412H84.7373L80.0373 36.2422L84.7122 43.6314H81.9977L78.4037 37.9513L76.3176 40.1379V43.6314Z"
				fill={fillColor}
			/>
			<path
				d="M69.7712 28.4258C68.9166 28.4258 68.2129 27.722 68.2129 26.8675C68.2129 25.9878 68.9166 25.3092 69.7712 25.3092C70.6257 25.3092 71.3294 25.9878 71.3294 26.8675C71.3294 27.722 70.6257 28.4258 69.7712 28.4258ZM68.615 43.6314V31.3412H70.9776V43.6314H68.615Z"
				fill={fillColor}
			/>
			<path
				d="M57.0227 43.6063H54.6602V25.1333H57.0227V33.2262C57.8018 31.8942 59.2847 30.9894 61.1948 30.9894C64.3365 30.9894 65.8445 32.9749 65.8445 36.1166V43.6314H63.482V36.6444C63.482 34.1562 62.3007 33.1508 60.5414 33.1508C58.2542 33.1508 57.0227 34.8096 57.0227 36.9208V43.6063Z"
				fill={fillColor}
			/>
			<path
				d="M42.8926 40.0625H45.1546C45.1546 41.3192 46.1096 42.0732 47.6679 42.0732C49.3267 42.0732 50.2818 41.3946 50.2818 40.2636C50.2818 39.4342 49.8796 38.9315 48.5978 38.6048L46.4364 38.1021C44.2498 37.5743 43.2193 36.4936 43.2193 34.684C43.2193 32.422 45.1294 30.9894 47.8438 30.9894C50.5331 30.9894 52.2924 32.4974 52.3427 34.8348H50.0807C50.0304 33.6032 49.201 32.8241 47.7684 32.8241C46.2856 32.8241 45.4562 33.4776 45.4562 34.6086C45.4562 35.438 46.0594 35.9909 47.2658 36.2925L49.4272 36.8203C51.5133 37.323 52.5438 38.278 52.5438 40.1128C52.5438 42.4502 50.5331 43.933 47.6176 43.933C44.7273 43.933 42.8926 42.3999 42.8926 40.0625Z"
				fill={fillColor}
			/>
			<path
				d="M27.9198 43.6314L23.8984 31.3412H26.3364L28.3722 37.7251C28.6486 38.6299 28.9 39.5598 29.1262 40.6406C29.3272 39.5598 29.654 38.5294 29.9304 37.7251L31.9914 31.3412H34.4042L36.44 37.7251C36.641 38.3283 37.0432 39.7609 37.2442 40.6406C37.4453 39.6604 37.6715 38.8058 38.0234 37.7251L40.0843 31.3412H42.5474L38.3501 43.6314H36.1132L33.9769 37.0465C33.5748 35.815 33.3234 34.8599 33.1978 34.1813C33.0721 34.7845 32.8459 35.5888 32.3935 37.0716L30.2572 43.6314H27.9198Z"
				fill={fillColor}
			/>
			<path
				d="M10.9395 37.4738C10.9395 33.6786 13.6539 31.0145 17.3485 31.0145C21.0179 31.0145 23.7323 33.6786 23.7323 37.4738C23.7323 41.2689 21.0179 43.933 17.3485 43.933C13.6539 43.933 10.9395 41.2689 10.9395 37.4738ZM13.3271 37.4738C13.3271 40.0374 14.9608 41.8218 17.3485 41.8218C19.711 41.8218 21.3698 40.0374 21.3698 37.4738C21.3698 34.9102 19.711 33.1257 17.3485 33.1257C14.9608 33.1257 13.3271 34.9102 13.3271 37.4738Z"
				fill={fillColor}
			/>
			<path
				d="M2.36253 43.6314H0V25.1333H2.36253V37.1219L7.81647 31.3412H10.7822L6.08227 36.2422L10.7571 43.6314H8.04267L4.4486 37.9513L2.36253 40.1379V43.6314Z"
				fill={fillColor}
			/>
			<path
				d="M65.8389 4.35413L65.3669 14.2562L76.981 18.1689L82.6695 11.5219C82.6695 11.5219 78.3346 13.122 76.5809 11.4553C74.9015 9.8592 76.1122 5.76461 76.1122 5.76461C76.1122 5.76461 72.9045 9.59536 70.226 9.02224C67.7923 8.50149 65.8389 4.35413 65.8389 4.35413Z"
				stroke="#635BFF"
				strokeWidth="2.3"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default Logo;