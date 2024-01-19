import styles from "./styles.module.css";
import { useForm } from "react-hook-form";

interface UserData {
	email: string;
}

type FormValue = {
	email: number | string;
};

export default function MobileNewsLetter() {
	const { register, handleSubmit, reset } = useForm<FormValue>({
		defaultValues: {
			email: "",
		},
		shouldUseNativeValidation: true,
		mode: "onChange",
	});

	const userEmail =
		(document.querySelector("#uNumber") as HTMLInputElement)?.value || "";

const  SignUp = (userData: UserData) =>{
		let result: any = null;
		let error: any = null;
	}

	return (
		<div className={styles.body}>
			<div className={styles.newsNote}>
				subscribe to our newsletter and receive exclusive offer every week
	    </div>
			<div>
				<form
					className={styles.form}
					onSubmit={handleSubmit(() => SignUp({ email: userEmail }))}
				>
					<input
						type="text"
						className={styles.inputS}
						{...register("email", {
							pattern: {
								value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
								message: `Email Required`,
							},
						})}
						id="uNumber"
						placeholder="Email"
					/>
					<button className={styles.button} type="submit">
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}
