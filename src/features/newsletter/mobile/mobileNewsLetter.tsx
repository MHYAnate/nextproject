
import styles from "./styles.module.css";
import { useForm,SubmitHandler } from "react-hook-form";
import Image from "next/image";

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

	

		const onSubmit: SubmitHandler<UserData> = (data) => console.log(data)


	return (
		<div className={styles.body}>
			<Image
			object-fit="cover"
			className={styles.imgSlide}
			alt="Picture of the author"
			src="/platform/news7.jpg"
			layout="fill"
			priority={true}
			unoptimized
			/>
			<div className={styles.positioner}>
				<div className={styles.inpositioner}>
					<div className={styles.newsNote}>
				subscribe to our newsletter and receive exclusive offers every week
	    </div>
		
				<form
					className={styles.form}
					onSubmit={handleSubmit(() => onSubmit)}
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
		</div>
	);
}
