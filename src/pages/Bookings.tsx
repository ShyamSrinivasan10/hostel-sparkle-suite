import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const bookings = [
  { id: "BK-5001", student: "Aisha Khan", room: "B-214", date: "2025-08-10" },
  { id: "BK-5002", student: "Rohit Sharma", room: "A-109", date: "2025-08-11" },
];

export default function Bookings() {
  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold tracking-tight">Bookings</h1>
        <p className="text-muted-foreground">Create and manage room bookings.</p>
      </header>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Recent Bookings</CardTitle>
          <Button>New Booking</Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Booking ID</TableHead>
                <TableHead>Student</TableHead>
                <TableHead>Room</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bookings.map((b) => (
                <TableRow key={b.id}>
                  <TableCell>{b.id}</TableCell>
                  <TableCell>{b.student}</TableCell>
                  <TableCell>{b.room}</TableCell>
                  <TableCell>{b.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </section>
  );
}
