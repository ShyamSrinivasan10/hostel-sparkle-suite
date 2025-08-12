import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const rooms = [
  { room: "A-101", type: "Single", status: "Occupied" },
  { room: "A-102", type: "Double", status: "Available" },
  { room: "B-205", type: "Single", status: "Maintenance" },
];

export default function Rooms() {
  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold tracking-tight">Rooms</h1>
        <p className="text-muted-foreground">Overview of room inventory and status.</p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Room Status</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Room</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rooms.map((r) => (
                <TableRow key={r.room}>
                  <TableCell>{r.room}</TableCell>
                  <TableCell>{r.type}</TableCell>
                  <TableCell>
                    <Badge variant={
                      r.status === "Available" ? "secondary" : r.status === "Occupied" ? "default" : "destructive"
                    }>
                      {r.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </section>
  );
}
