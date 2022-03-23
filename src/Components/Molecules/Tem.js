/** @format */

import React from "react";

const Tem = ({ key, title, obj }) => {
	console.log(obj);
	return (
		<div className="flex relative pb-12">
			<div className="h-full w-10 absolute inset-0 flex items-center justify-center">
				<div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
			</div>
			<div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-600 inline-flex items-center justify-center text-white relative z-10"></div>

			<div className="pl-2">
				<h2 className="text-xl">{title}</h2>
				<ul className="grid justify-start text-left pt-2">
					{obj.map((o) => (
						<li className="pb-2">📢 {o}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Tem;
