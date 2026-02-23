import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardAction,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

interface CardProps {
	title: string;
	description: string;
	image: string;
	link: string;
	buttonTitle: string;
}
export default function CardWithImage({
	title,
	description,
	image,
	link,
	buttonTitle,
}: CardProps) {
	return (
		<Card className="relative   max-w-sm pt-0 overflow-hidden">
			<div className="absolute inset-0 z-30 aspect-video bg-black/35 " />
			<img
				src="https://avatar.vercel.sh/shadcn1"
				alt="Event cover"
				className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
			/>
			<CardHeader>
				{/* <CardAction>
					<Badge variant="secondary">Featured</Badge>
				</CardAction> */}
				<CardTitle> {title}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardFooter>
				<Link href={link}>
					<Button className="w-full"> {buttonTitle}</Button>
				</Link>
			</CardFooter>
		</Card>
	);
}
