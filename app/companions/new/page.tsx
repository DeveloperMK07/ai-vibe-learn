import CompanionForm from "@/components/CompanionForm";
import {auth} from "@clerk/nextjs/server";
import {redirect} from "next/navigation";
import { newCompanionPermissions } from "@/lib/actions/companion.action";
import Image from "next/image";
import Link from "next/link";

const NewCompanion = async () => {
    const { userId } = await auth();
    if(!userId) redirect('/sign-in');

    const canCreateCompanion = await newCompanionPermissions();

    return (
        <main className="w-full md:w-2/3 lg:w-1/3 flex items-center justify-center mx-auto px-4">
            {canCreateCompanion ? (
                <article className="w-full gap-4 flex flex-col">
                <h1 className="text-2xl font-bold">Companion Builder</h1>
                <CompanionForm />
                </article>
            ) : (
                <article className="companion-limit text-center">
                <Image src="/images/limit.svg" alt="Companion limit reached" width={400} height={270} />
                <div className="cta-badge mt-4">Upgrade your plan</div>
                <h1 className="text-xl font-semibold">You’ve Reached Your Limit</h1>
                <p className="text-gray-600 mb-4">Upgrade to create more companions and unlock premium features.</p>
                <Link href="/subscription" className="btn-primary w-full justify-center">
                    Upgrade My Plan
                </Link>
                </article>
            )}
        </main>

    )
}

export default NewCompanion