//sign-in
import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-background">
            <SignUp
            appearance={{    //customize UI
                elements: {
                    rootBox:
                    "mx-auto",
                    card: "shadow-lg"
                },
            }}
        />
        </div>
    ) 
}


