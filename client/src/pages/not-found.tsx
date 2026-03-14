import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md bg-white/5 border-white/10 backdrop-blur-md">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-destructive" />
            <h1 className="text-2xl font-bold font-display text-white">404 Page Not Found</h1>
          </div>

          <p className="mt-4 text-sm text-white/60 font-light">
            The analysis you are looking for has been moved or does not exist.
          </p>

          <div className="mt-8 flex justify-end">
            <Link href="/">
              <MagneticButton strength={20}>Return Home</MagneticButton>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
