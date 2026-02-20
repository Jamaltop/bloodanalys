"use client"
import { Button } from "@/shared/ui/shadcn/button";
import { Input } from "@/shared/ui/shadcn/input";
import { Label } from "@/shared/ui/shadcn/label";


import React, { useState } from "react";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/shared/ui/shadcn/sheet";


const codeToImage: Record<string, string> = {
  "X17-GA": "/blood1.png",
  "OPR-X1": "/blood2.jpeg",
};
export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [sheetOpen, setSheetOpen] = useState<boolean>(false);

  function handleOpenChange(open: boolean) {
    setSheetOpen(open);
    if (!open) setSelectedImage(null);
  }

  function handleAnalyse() {
    const input = document.getElementById("sheet-demo-name") as HTMLInputElement | null;
    const code = input?.value ?? "";
    const img = codeToImage[code] ?? null;
    
    if (img) {
      setSelectedImage(img);
    } else {
      setSelectedImage(null);
      alert("Blood sample is abnormal.");
    }
  }
  return (
    <main className="w-full min-h-screen bg-[url('/headerback.png')] bg-cover bg-center bg-no-repeat">
      <div className={`container flex items-center flex-col justify-center h-full`}>
        <h1 className="text-white text-[23px] whitespace-nowrap font-bold">Welcome to Blood Analyzer</h1>
        <p className="font-extrabold text-[20px] mt-4 text-gray-900 max-w-prose leading-relaxed">Welcome to Blood Analyzer
Blood Analyzer is an advanced biological analysis platform designed to deliver fast, accurate, and comprehensive evaluation of blood samples using modern computational technologies and automated diagnostic systems. The platform combines digital microscopy, molecular modeling, and intelligent data processing to simulate laboratory-grade analysis in a secure online environment.
Our system is capable of identifying blood type, genetic markers, biochemical composition, and potential abnormalities through a multi-stage analytical process. By utilizing predictive algorithms and pattern recognition, Blood Analyzer provides detailed insights that support medical research, forensic investigation, and educational purposes.
The technology behind Blood Analyzer is built on precision and reliability. Each analysis undergoes multiple verification layers to ensure consistency and accuracy of results. Secure data protocols protect user information, while controlled access mechanisms maintain confidentiality for sensitive biological data.
In addition to standard analysis, the platform includes extended detection modules capable of identifying unusual cellular structures, foreign substances, and rare biological signatures. These advanced features allow professionals to detect anomalies that may require deeper laboratory investigation.
Blood Analyzer continues to evolve through constant technological improvements and system updates. Our mission is to provide innovative analytical solutions that enhance understanding of biological information and support scientific advancement.
Blood Analyzer — Advanced Insight into Every Drop.</p>
           <Sheet open={sheetOpen} onOpenChange={handleOpenChange}>
      <SheetTrigger asChild>
        <Button className="bg-[#EB5757] text-white px-6 py-3 rounded-md mt-4 hover:bg-[#d63626] transition-colors">Analyse Blood</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Analyse Blood</SheetTitle>
          <SheetDescription>
            You can alayse your blood here. Just fill the form and submit it. We will send you the results in 1 second.
          </SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-name">DNK code</Label>
            <Input id="sheet-demo-name" placeholder="X17-GA" />
          </div>
          {selectedImage && (
            <div className="flex justify-center">
              <img src={selectedImage} alt="analysis result" className="max-h-[100vh] w-full max-w-2xl object-contain rounded-md" />
            </div>
          )}
          
        </div>
        <SheetFooter>
          <Button type="button" onClick={handleAnalyse}>Analyse Blood</Button>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
      </div>
    </main>
  );
}
