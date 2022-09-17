import { useContractFunction } from "@usedapp/core";
import { Button, Spinner } from "react-bootstrap";
import { factoryContract, arbitrator } from "../constants";
import { Formik, Form, Field } from "formik";
import { fakeUSDC } from "../constants";
import { utils } from "ethers";

import "./create.css";
const Create = () => {
	const { state, send: createListing } = useContractFunction(factoryContract, "createListing");
	const handleFormSubmit = (values) => {
		const { _tokenWanted, _amountWanted, arbitrator, imageURL, name, desc } = values;
		const price = utils.parseUnits(_amountWanted.toString(), 18);
		createListing(_tokenWanted, price, arbitrator, imageURL, name, desc);
	};
	console.log("state", state);
	return state.status === "Mining" || state.status === "PendingSignature" ? (
		<>
			<Spinner animation="border" variant="light" />
		</>
	) : (
		<>
			Create an Item
			<Formik
				initialValues={{
					_tokenWanted: fakeUSDC,
					_amountWanted: 1,
					arbitrator,
					imageURL: "https://i.imgur.com/uOCVYZJ.png",
					name: "",
					desc: "",
				}}
				onSubmit={(values, { setSubmitting }) => {
					setSubmitting(false);
					handleFormSubmit(values);
				}}
			>
				{({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
					<Form onSubmit={handleSubmit}>
						<div className="inputContainer">
							<label>USDC</label>
							<Field
								type="text"
								name="_tokenWanted"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values._tokenWanted}
								disabled
							/>
						</div>
						<div className="inputContainer">
							<label>Price</label>
							<Field
								type="number"
								name="_amountWanted"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values._amountWanted}
							/>
						</div>

						<div className="inputContainer">
							<label>Image Url</label>
							<Field type="text" name="imageURL" onChange={handleChange} onBlur={handleBlur} value={values.imageURL} />
						</div>
						<div className="inputContainer">
							<label>Name</label>
							<Field type="text" name="name" onChange={handleChange} onBlur={handleBlur} value={values.name} />
						</div>
						<div className="inputContainer">
							<label>Description</label>
							<Field type="text" name="desc" onChange={handleChange} onBlur={handleBlur} value={values.desc} />
						</div>
						<Button type="submit" disabled={isSubmitting}>
							Submit
						</Button>
					</Form>
				)}
			</Formik>
		</>
	);
};

export default Create;
