"use client"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
  List,
  ListCheck,
  ListChecks,
  ListTodo,
  Plus,
  Sigma,
  SquarePen,
  Trash,
  Trash2Icon,
} from "lucide-react"
const Home = () => {
  return (
    <main className="flex w-full h-screen bg-gray-400 justify-center items-center">
      <Card>
        <CardHeader className="flex gap-3 p-3">
          <Input type="search" placeholder="Adicionar tarefa..." />
          <Button variant="default" className="cursor-pointer">
            <Plus size={20} />
            Cadastrar
          </Button>
        </CardHeader>
        {/* BOTÕES */}
        <CardContent>
          <Separator />
          <div className="flex gap-1 p-3">
            <Badge variant="default">
              <List />
              Todas
            </Badge>
            <Badge variant="outline">
              <ListTodo />
              Não finalizadas
            </Badge>
            <Badge variant="outline">
              <ListChecks />
              Finalizadas
            </Badge>
          </div>

          {/* Tarefas */}
          <div className="mt-3 py-2 text-nowrap">
            <div className="h-14 flex justify-between items-center border-b border-t mb-2">
              <div className="flex items-center w-1 h-full bg-green-300">
                <p className="flex-1 px-2">Estudar React</p>
              </div>

              <div className="flex gap-1">
                <Dialog>
                  <DialogTrigger>
                    <SquarePen size={16} className="cursor-pointer" />
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Editar tarefa</DialogTitle>
                    </DialogHeader>
                    <div className="flex gap-2">
                      <Input
                        placeholder="Editar tarefa..."
                        className="border-gray-400"
                      />
                      <Button className="cursor-pointer">Editar</Button>
                    </div>
                    <DialogClose />
                  </DialogContent>
                </Dialog>
                <Trash2Icon size={16} className="cursor-pointer" />
              </div>
            </div>

            <div className="h-14 flex justify-between items-center border-b border-t mb-2">
              <div className="flex items-center w-1 h-full bg-green-300">
                <p className="flex-1 px-2">Estudar Next</p>
              </div>
              <div className="flex gap-1">
                <SquarePen size={16} className="cursor-pointer" />
                <Trash2Icon size={16} className="cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-6 space-x-8">
            <div className="flex gap-2 items-center">
              <ListCheck size={16} />
              <p className="text-xs">Tarefas concluídas(2/3)</p>
            </div>
            <AlertDialog>
              <AlertDialogTrigger
                render={
                  <Button
                    className="text-xs h-7 cursor-pointer"
                    variant="outline"
                  >
                    <Trash />
                    Limpar tarefas concluídas
                  </Button>
                }
              />
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Tem certeza que deseja excluir x tarefas?
                  </AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Sim</AlertDialogCancel>
                  <AlertDialogAction>Não</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>

          <div className="w-full h-3 bg-gray-200 rounded-md mt-5">
            <div
              className="bg-blue-700 h-full  rounded-md"
              style={{ width: "70%" }}
            ></div>
          </div>
          <div className="flex justify-end items-center mt-2 gap-1">
            <Sigma size={16} />
            <p className="text-xs">Tarefas concluídas</p>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}

export default Home
