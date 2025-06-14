"use client";

import type React from "react";

import Cabecalho from "@/components/Cabecalho";
import Tarefas from "@/components/Tarefas";
import { useTarefas } from "@/data/ContextTarefa";

const Home = () => {
    const { tarefas } = useTarefas();

    return (
        <div className="flex flex-col gap-8 container mx-auto p-4">
            <Cabecalho />
            <Tarefas dados={tarefas} />
        </div>
    );
};

export default Home;