/*
 * There are some key problems with the React code below.
 * Assume fetchUserProfile exists elsewhere.
 */
import { Suspense, useState, useEffect } from "react";

const SuspensefulUserProfile = ({ userId }) => {
	const [data, setData] = useState({});
	useEffect( () => {
		fetchUserProfile(userId).then((profile) => setData(profile));
	}, []);
	return (
		<Suspense>
			<UserProfile data={data} />
		</Suspense>
	);
};


const UserProfile = ({ data }) => {
    const data = data.user.read();
	return (
		<>
			<h1>{data.name}</h1>
			<h2>{data.email}</h2>
		</>
	);
};

const UserProfileList = () => (
	<>
		<SuspensefulUserProfile userId={1} />
		<SuspensefulUserProfile userId={2} />
		<SuspensefulUserProfile userId={3} />
	</>
);