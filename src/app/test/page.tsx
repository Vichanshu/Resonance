import { db } from "@/prisma/db";

//create a page and display the total number of voices and name them
export default async function TestPage() {

    const voices = await db.orm.public.Voice.all();
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">
                Voices ({voices.length})
            </h1>
            <ul className="space-y-2">
                {voices.map((voice) => (
                    <li key={voice.id}>
                        {voice.name} - {voice.variant}
                    </li>
                ))}
            </ul>
        </div>
    );
}



