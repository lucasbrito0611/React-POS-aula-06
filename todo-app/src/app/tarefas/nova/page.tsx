"use client";

import type React from "react";

import Cabecalho from "@/components/Cabecalho";
import ModalTarefa from "@/components/ModalTarefa";
import { useTarefas } from "@/data/ContextTarefa";

const Home = () => {
    const { adicionarTarefa } = useTarefas();

    return (
        <div className="flex flex-col gap-8 container mx-auto p-4">
            <Cabecalho />
            <ModalTarefa addTarefa={adicionarTarefa} />
        </div>
    );
};

export default Home;