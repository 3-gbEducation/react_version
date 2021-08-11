import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
{
	title: "Home",
	path: "/admin/home",
	icon: <AiIcons.AiFillHome />,
},
{
	title: "Edit Page Content",
	icon: <IoIcons.IoIosPaper />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
	{
		title: "Index",
		path: "/admin/editpagecontent/index",
		icon: <IoIcons.IoIosPaper />,
		cName: "sub-nav",
	},
	{
		title: "About",
		path: "/admin/editpagecontent/about",
		icon: <IoIcons.IoIosPaper />,
		cName: "sub-nav",
	},
	{
		title: "Contact",
		path: "/admin/editpagecontent/contact",
		icon: <IoIcons.IoIosPaper />,
	},
	],
},
{
	title: "Edit Data",
	icon: <IoIcons.IoIosPaper />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
	{
		title: "Blogs",
		path: "/admin/editdata/blogs",
		icon: <IoIcons.IoIosPaper />,
		cName: "sub-nav",
	},
	{
		title: "Tutor",
		path: "/admin/editdata/tutor",
		icon: <IoIcons.IoIosPaper />,
		cName: "sub-nav",
	},
	],
},
{
	title: "View Form Responses",
	path: "/admin/viewformresponses",
	icon: <AiIcons.AiOutlineFolderView />,
},
{
	title: "Logout",
	path: "/logout",
	icon: <AiIcons.AiOutlineLogout />,
},
];
