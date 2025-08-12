import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const tasks = [
  { id: "MT-2001", issue: "Leaky faucet", room: "C-305", status: "Open" },
  { id: "MT-2002", issue: "AC not cooling", room: "A-210", status: "In Progress" },
];

export default function Maintenance() {
  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold tracking-tight">Maintenance</h1>
        <p className="text-muted-foreground">Track and resolve maintenance tickets.</p>
      </header>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Open Tickets</CardTitle>
          <Button variant="outline">New Ticket</Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Ticket</TableHead>
                <TableHead>Issue</TableHead>
                <TableHead>Room</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tasks.map((t) => (
                <TableRow key={t.id}>
                  <TableCell>{t.id}</TableCell>
                  <TableCell>{t.issue}</TableCell>
                  <TableCell>{t.room}</TableCell>
                  <TableCell>{t.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </section>
  );
}
