let notes = [
    {
        id: 1,
        heading: "Mempelajari Javascript",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus non expedita similique tempora tempore exercitationem. Accusamus sint porro iste quos velit aperiam voluptas placeat error nulla maxime id, deserunt eum.",
        created_by: "John Doe",
        created_at: 1738146027613 // bisa menggunakan Date.now()
    }
];

const createNote = (heading, description, created_by) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const newNote = {
                id: notes.length ? notes[notes.length - 1].id + 1 : 1,
                heading,
                description,
                created_by,
                created_at: Date.now()
            };
            notes = [...notes, newNote];
            resolve();
        }, 1000);
    });
};

const readNote = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log([...notes]);
            resolve();
        }, 500);
    });
};

const updateNote = (id, newHeading, newDescription) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            notes = notes.map(note =>
                note.id === id ? { ...note, heading: newHeading, description: newDescription } : note
            );
            resolve();
        }, 1000);
    });
};

const deleteNote = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            notes = notes.filter(note => note.id !== id);
            resolve();
        }, 1000);
    });
};

// mengetes kode (diharapkan untuk tidak diganti): 
const test = async () => {
    await createNote("Belajar React", "Mempelajari dasar-dasar React dan cara membuat komponen.", "Jane Doe");
    await readNote();
    console.log("=================================================================================================================");
    await updateNote(1, "Mempelajari JavaScript Lanjutan", "Mempelajari konsep lanjutan dalam JavaScript.");
    await readNote();
    console.log("=================================================================================================================");
    await deleteNote(1);
    await readNote();
};

test();