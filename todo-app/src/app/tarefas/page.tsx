"use client";

import type React from "react";
import axios from 'axios'


import { useEffect, useState } from "react";
import { Todo } from "@/types/tarefa";
import Cabecalho from "@/components/Cabecalho";
import Tarefas from "@/components/Tarefas";
import ModalTarefa from "@/components/ModalTarefa";
import { useTarefas } from "@/data/ContextTarefa";

const Home = () => {
    const { tarefas, adicionarTarefa } = useTarefas();
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="flex flex-col gap-8 container mx-auto p-4">
            <Cabecalho />
            <div>
                <button className="bg-gray-800 text-white text-2xl font-medium py-4 px-6 rounded-[5px] cursor-pointer" onClick={() => setIsModalOpen(true)}>
                    Nova tarefa
                </button>
            </div>
            {isModalOpen && <ModalTarefa addTarefa={adicionarTarefa} onClose={() => setIsModalOpen(false)} />}
            <Tarefas dados={tarefas} />
        </div>
    );
};

export default Home;