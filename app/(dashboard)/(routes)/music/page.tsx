"use client";

import * as z from "zod";
import axios from "axios";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Music, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
// import { Loader } from "@/components/loader";
// import { Empty } from "@/components/ui/empty";
// import { useProModal } from "@/hooks/use-pro-modal";

import { formSchema } from "./constants";
import Heading from "@/components/Heading";
import Loader from "@/components/Loader";
import Empty from "@/components/Empty";
import { useProModal } from "@/hooks/use-pro-modal";

const MusicPage = () => {

  const proModal = useProModal();

  const router = useRouter();
  const [music, setMusic] = useState<string>();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    }
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setMusic(undefined);

      const response = await axios.post('/api/music', values);

      setMusic(response.data.audio);
      form.reset();
    } catch (error: any) {
      console.log(error)
      if (error?.response?.status === 403) {
        proModal.onOpen();
      }
      else {
          toast.error("Something went wrong.");        
        }
    }
    finally {
      router.refresh();
    }
  }

  return (
    <div>
      <Heading
        title="Music Generation"
        description="Turn your prompt into music."
        icon={Music}
        iconColor="text-emerald-500"
        bgColor="bg-emerald-500/10"
      />
      <div className="px-4 lg:px-8">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid w-full grid-cols-12 gap-2 p-4 px-3 border rounded-lg md:px-6 focus-within:shadow-sm"
          >
            <FormField
              name="prompt"
              render={({ field }) => (
                <FormItem className="col-span-12 lg:col-span-10">
                  <FormControl className="p-0 m-0">
                    <Input
                      className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                      disabled={isLoading}
                      placeholder="Piano solo"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button className="w-full col-span-12 lg:col-span-2" type="submit" disabled={isLoading} size="icon">
              Generate
            </Button>
          </form>
        </Form>
        {isLoading && (
          <div className="p-20">
            <Loader />
          </div>
        )}
        {!music && !isLoading && (
          <Empty label="No music generated." />
        )}
        {music && (
          <audio controls className="w-full mt-8">
            <source src={music} />
          </audio>
        )}
      </div>
    </div>
  );
}

export default MusicPage;
