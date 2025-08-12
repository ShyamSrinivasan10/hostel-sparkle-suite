import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const data = [
  { id: "STU-101", name: "Aisha Khan", year: "2nd", room: "B-214" },
  { id: "STU-102", name: "Rohit Sharma", year: "1st", room: "A-109" },
  { id: "STU-103", name: "Meera Patel", year: "3rd", room: "C-301" },
];

export default function Students() {
  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold tracking-tight">Students</h1>
        <p className="text-muted-foreground">Manage student profiles and allocations.</p>
      </header>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>All Students</CardTitle>
          <Button>Add Student</Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Year</TableHead>
                <TableHead>Room</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((s) => (
                <TableRow key={s.id}>
                  <TableCell>{s.id}</TableCell>
                  <TableCell>{s.name}</TableCell>
                  <TableCell>{s.year}</TableCell>
                  <TableCell>{s.room}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </section>
  );
}
