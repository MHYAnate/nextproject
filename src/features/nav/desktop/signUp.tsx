import { useForm } from "react-hook-form";
import styles from "./styles.module.css";
import SignUp from "@/firebase/firebase";
import { useRouter } from "next/navigation";
import firebase from "@/firebase/firebase";
import {
	getAuth,
	createUserWithEmailAndPassword,
	sendEmailVerification,
	updateProfile,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { TabButton } from "./tabBtn";
import { useState } from "react";
import SigningUp from "./signUp";
import * as React from "react";

interface UserData {
	email: string;
	password: string;
}

type FormValue = {
	userName: string;
	address: string;
	number: number | string;
	numberV: number | string;
	passCode0: number | string;
	passCode1: number | string;
	passCode2: number | string;
	passCode3: number | string;
	passCodeV0: number | string;
	passCodeV1: number | string;
	passCodeV2: number | string;
	passCodeV3: number | string;
	pinCode: number | string;
};

const auth = getAuth();

export default function SingUp() {
	const [tab, setTab] = useState("");

	const {
		register,
		handleSubmit,
		watch,
		reset,
		unregister,
		setFocus,
		setValue,
		formState: {
			isSubmitSuccessful,
			errors,
			isSubmitted,
			isSubmitting,
			isDirty,
			isValid,
		},
	} = useForm<FormValue>({
		defaultValues: {
			userName: "",
			address: "",
			number: "",
			numberV: "",
			passCode0: "",
			passCode1: "",
			passCode2: "",
			passCode3: "",
			passCodeV0: "",
			passCodeV1: "",
			passCodeV2: "",
			passCodeV3: "",
			pinCode: "",
		},
		shouldUseNativeValidation: true,
		mode: "onChange",
	});

	const [passwordVisible, setPasswordVisible] = useState(false);

	const handleTogglePassword = () => {
		setPasswordVisible((prevPasswordVisible) => !prevPasswordVisible);
	};

	const userNameId = document.getElementById(
		"uName"
	) as HTMLInputElement | null;

	const mobileNumberId = document.getElementById(
		"uNumber"
	) as HTMLInputElement | null;

	const mobileNumberVId = document.getElementById(
		"uNumberV"
	) as HTMLElement | null;
	const userAddressId = document.getElementById(
		"uAddress"
	) as HTMLElement | null;

	const userName =
		(document.querySelector("#uName") as HTMLInputElement)?.value || "";
	const userAddress =
		(document.querySelector("#uAddress") as HTMLInputElement)?.value || "";

	const userPin =
		(document.querySelector("#pin") as HTMLInputElement)?.value || "";

	const Usernumber =
		(document.querySelector("#uNumber") as HTMLInputElement)?.value || "";

	const check0 = watch("passCode0");
	const check1 = watch("passCode1");
	const check2 = watch("passCode2");
	const check3 = watch("passCode3");
	const checkV0 = watch("passCodeV0");
	const checkV1 = watch("passCodeV1");
	const checkV2 = watch("passCodeV2");
	const checkV3 = watch("passCodeV3");

	const passCodeV0 =
		(document.querySelector('[name="passCodeV0"]') as HTMLInputElement)
			?.value || "";
	const passCodeV1 =
		(document.querySelector('[name="passCodeV1"]') as HTMLInputElement)
			?.value || "";
	const passCodeV2 =
		(document.querySelector('[name="passCodeV2"]') as HTMLInputElement)
			?.value || "";
	const passCodeV3 =
		(document.querySelector('[name="passCodeV3"]') as HTMLInputElement)
			?.value || "";

	const pinCode = "c" + "l" + passCodeV0 + passCodeV1 + passCodeV2 + passCodeV3;

	const router = useRouter();

	if (isSubmitSuccessful) {
		reset();
	}

	React.useEffect(() => {
		if (
			isDirty &&
			document.activeElement !== userNameId &&
			document.activeElement !== mobileNumberId &&
			document.activeElement !== mobileNumberVId &&
			document.activeElement !== userAddressId
		) {
			if (check0) {
				setFocus("passCode1");
			}
			if (check1) {
				setFocus("passCode2");
			}
			if (check2) {
				setFocus("passCode3");
			}
			if (check3) {
				setFocus("passCode3");
			}
		}
	}, [
		setFocus,
		check0,
		check1,
		check2,
		check3,
		isDirty,
		userAddressId,
		userNameId,
		mobileNumberId,
		mobileNumberVId,
	]);

	React.useEffect(() => {
		if (
			isDirty &&
			document.activeElement !== userNameId &&
			document.activeElement !== mobileNumberId &&
			document.activeElement !== mobileNumberVId &&
			document.activeElement !== userAddressId
		) {
			if (checkV0) {
				setFocus("passCodeV1");
			}
			if (checkV1) {
				setFocus("passCodeV2");
			}
			if (checkV2) {
				setFocus("passCodeV3");
			}
			if (checkV3) {
				setFocus("passCodeV3");
			}
		}
	}, [
		setFocus,
		checkV0,
		checkV1,
		checkV2,
		checkV3,
		isDirty,
		userAddressId,
		userNameId,
		mobileNumberId,
		mobileNumberVId,
	]);

	React.useEffect(() => {
		const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
			if (
				e.key === "Backspace" &&
				document.activeElement !== userNameId &&
				document.activeElement !== mobileNumberId &&
				document.activeElement !== mobileNumberVId &&
				document.activeElement !== userAddressId
			) {
				if (check3) {
					e.preventDefault();
					setFocus("passCode3");
				} else if (check2) {
					e.preventDefault();
					setFocus("passCode2");
				} else if (check1) {
					e.preventDefault();
					setFocus("passCode1");
				} else if (check0) {
					e.preventDefault();
					setFocus("passCode0");
				}
			}
		};

		window.addEventListener("keyup", onKeyUp as any); // Add 'as any' to cast the type

		return () => {
			window.removeEventListener("keyup", onKeyUp as any); // Add 'as any' to cast the type
		};
	}, [
		check0,
		check1,
		check2,
		check3,
		isDirty,
		userAddressId,
		userNameId,
		mobileNumberId,
		mobileNumberVId,
		setFocus,
	]);

	React.useEffect(() => {
		const onKeyUpV = (e: React.KeyboardEvent<HTMLInputElement>) => {
			if (
				e.key === "Backspace" &&
				document.activeElement !== userNameId &&
				document.activeElement !== mobileNumberId &&
				document.activeElement !== mobileNumberVId &&
				document.activeElement !== userAddressId
			) {
				if (checkV3) {
					e.preventDefault();
					setFocus("passCodeV3");
				} else if (checkV2) {
					e.preventDefault();
					setFocus("passCodeV2");
				} else if (checkV1) {
					e.preventDefault();
					setFocus("passCodeV1");
				} else if (checkV0) {
					e.preventDefault();
					setFocus("passCodeV0");
				}
			}
		};

		window.addEventListener("keyup", onKeyUpV as any); // Add 'as any' to cast the type

		return () => {
			window.removeEventListener("keyup", onKeyUpV as any); // Add 'as any' to cast the type
		};
	}, [
		checkV0,
		checkV1,
		checkV2,
		checkV3,
		isDirty,
		userAddressId,
		userNameId,
		mobileNumberId,
		mobileNumberVId,
		setFocus,
	]);

	React.useEffect(() => {
		const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
			if (
				e.key &&
				isDirty &&
				e.key !== "Backspace" &&
				document.activeElement !== userNameId &&
				document.activeElement !== mobileNumberId &&
				document.activeElement !== mobileNumberVId &&
				document.activeElement !== userAddressId
			) {
				if (check0) {
					setFocus("passCode1");
				}
				if (check1) {
					setFocus("passCode2");
				}
				if (check2) {
					setFocus("passCode3");
				}
				if (check3) {
					setFocus("passCode3");
				}
			}
		};

		window.addEventListener("keyup", onKeyUp as any); // Add 'as any' to cast the type

		return () => {
			window.removeEventListener("keyup", onKeyUp as any); // Add 'as any' to cast the type
		};
	}, [
		check0,
		check1,
		check2,
		check3,
		isDirty,
		userAddressId,
		userNameId,
		mobileNumberId,
		mobileNumberVId,
		setFocus,
	]);

	React.useEffect(() => {
		const onKeyUpV = (e: React.KeyboardEvent<HTMLInputElement>) => {
			if (
				e.key &&
				isDirty &&
				e.key !== "Backspace" &&
				document.activeElement !== userNameId &&
				document.activeElement !== mobileNumberId &&
				document.activeElement !== mobileNumberVId &&
				document.activeElement !== userAddressId
			) {
				if (checkV0) {
					setFocus("passCodeV1");
				}
				if (checkV1) {
					setFocus("passCodeV2");
				}
				if (checkV2) {
					setFocus("passCodeV3");
				}
				if (checkV3) {
					setFocus("passCodeV3");
				}
			}
		};

		window.addEventListener("keyup", onKeyUpV as any); // Add 'as any' to cast the type

		return () => {
			window.removeEventListener("keyup", onKeyUpV as any); // Add 'as any' to cast the type
		};
	}, [checkV0, checkV1, checkV2, checkV3, isDirty, userNameId, setFocus]);

	React.useEffect(() => {
		setValue("pinCode", pinCode);
	}, [setValue, pinCode]);

	async function SignUp(userData: UserData) {
		let result: any = null;
		let error: any = null;

		const auth = firebase.auth;
		const { database } = firebase;

		try {
			result = await createUserWithEmailAndPassword(
				auth,
				userData.email,
				userData.password
			);
			const user = result.user;

			router.push(`/client/${user.uid}`);
			await sendEmailVerification(user);
			await updateProfile(user, {
				displayName: userName,
				// photoURL: "https://robohash.org/2?set=set2"
			});
		} catch (e: any) {
			error = e;
		}

		return { result, error };
	}

	return (
		<div className={styles.SignUpContainerHolder}>
			<div >
				<form
					className={styles.form}
					onSubmit={handleSubmit(() =>
						SignUp({ email: Usernumber, password: userPin })
					)}
				>
					<div>
						<input
							type="text"
							className={styles.inputS}
							{...register("number", {
								pattern: {
									value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
									message: `Email Required`,
								},
							})}
							id="uNumber"
							placeholder="email"
						/>
					</div>
					<div>
						<span className={styles.paspinComfirm}>Enter PinCode</span>
						<div className={styles.passcodeContainer}>
							<input
								{...register("passCode0", {
									required: "error message",
								})}
								onKeyUp={() => onkeyup}
								maxLength={1}
								className={styles.input1}
								type={passwordVisible ? "text" : "password"}
							/>
							<input
								{...register("passCode1", {
									required: "error message",
								})}
								onKeyUp={() => onkeyup}
								className={styles.input1}
								maxLength={1}
								type={passwordVisible ? "text" : "password"}
							/>
							<input
								{...register("passCode2", {
									required: "error message",
								})}
								onKeyUp={() => onkeyup}
								maxLength={1}
								className={styles.input1}
								type={passwordVisible ? "text" : "password"}
							/>
							<input
								{...register("passCode3", {
									required: "error message",
								})}
								onKeyUp={() => onkeyup}
								maxLength={1}
								className={styles.input1}
								type={passwordVisible ? "text" : "password"}
							/>

							<button
								type="button"
								className={styles.btn}
								id="toggle-password"
								onClick={handleTogglePassword}
							>
								{passwordVisible ? (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className={styles.svg}
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
										/>
									</svg>
								) : (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className={styles.svg}
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
										/>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
					<div className={styles.confirmPinContainer}>
						<span className={styles.paspinComfirm}>Re-confirm PinCode</span>

						<div className={styles.passcodeContainerV}>
							<input
								{...register("passCodeV0", {
									required: "error message",
									validate: (value, formValues) => value === check0,
								})}
								onKeyUp={() => onkeyup}
								maxLength={1}
								className={styles.input1}
								type={passwordVisible ? "text" : "password"}
							/>
							<input
								{...register("passCodeV1", {
									required: "error message",
									validate: (value, formValues) => value === check1,
								})}
								onKeyUp={() => onkeyup}
								className={styles.input1}
								maxLength={1}
								type={passwordVisible ? "text" : "password"}
							/>
							<input
								{...register("passCodeV2", {
									required: "error message",
									validate: (value, formValues) => value === check2,
								})}
								onKeyUp={() => onkeyup}
								maxLength={1}
								className={styles.input1}
								type={passwordVisible ? "text" : "password"}
							/>
							<input
								{...register("passCodeV3", {
									required: "error message",
									validate: (value, formValues) => value === check3,
								})}
								onKeyUp={() => onkeyup}
								maxLength={1}
								className={styles.input1}
								type={passwordVisible ? "text" : "password"}
							/>
						</div>
					</div>
					<div>
						<button className={styles.button} type="submit">
							SignUp
						</button>

						<input
							{...register("pinCode", {
								required: "error message",
							})}
							id="pin"
							className={styles.show}
						/>
					</div>
				</form>
			</div>
		</div>
	);
}
