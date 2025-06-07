"use client";

import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { Todo } from "@/types/tarefa";

interface TarefasContextType {
	tarefas: Todo[];
	adicionarTarefa: (titulo: string) => void;
}

const TarefasContext = createContext<TarefasContextType | null>(null);

export const TarefasProvider = ({ children }: { children: React.ReactNode }) => {
	const [tarefas, setTarefas] = useState<Todo[]>([]);

	useEffect(() => {
		const fetchTarefas = async () => {
		const response = await axios.get("https://dummyjson.com/todos");
		setTarefas(response.data.todos);
		};

		fetchTarefas();
	}, []);

	const adicionarTarefa = (titulo: string) => {
		if (titulo.trim() === "") return;

		const novaTarefa: Todo = {
			id: tarefas.length + 1,
			todo: titulo,
			completed: false,
			userId: tarefas.length + 1,
		};

		setTarefas((prev) => [novaTarefa, ...prev]);
	};

	return (
		<TarefasContext.Provider value={{ tarefas, adicionarTarefa }}>
			{children}
		</TarefasContext.Provider>
	);
};

export const useTarefas = () => {
	const context = useContext(TarefasContext);
	if (!context) {
		throw new Error("useTarefas deve ser usado dentro de TarefasProvider");
	}
	return context;
};