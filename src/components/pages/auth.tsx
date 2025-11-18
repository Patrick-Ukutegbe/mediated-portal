"use client";
import { useEffect, useState } from "react";
import { Colors, Typography } from "@Coronation-ArchTouch/cor-ui";
import { Icon } from "@Coronation-ArchTouch/cor-ui-icons";
import TextField from "@/src/components/molecules/TextField";
import { useSearchParams } from "next/navigation";
import useTheme from "@/src/hooks/useTheme";
import { Theme } from "@/src/types";
import ThemedButton from "@/src/components/themedComponents/ThemedButton";
import { useAppStore } from "@/src/providers/AppProvider";
// import { sendOtp } from "../services/otp";
// import { useRegistration } from "@/contexts/RegistrationContext";

const AuthPageComponent = () => {
    const { setTheme } = useTheme();
    const params = useSearchParams();
    const user = params.get("user");
    const [value, setValue] = useState<string>("");


    useEffect(() => {
        setTheme(user as Theme || Theme.INDIVIDUAL)
    }, [user, setTheme])

    //   const { email, setEmail } = useRegistration();

    //   const handleSendOTP = async () => {
    //     sendOtp({
    //       email
    //     }).then((response) => {
    //       console.log(response);
    //       router.push("/auth/otp")
    //     }).catch((error) => {
    //       console.log(error);
    //     });
    //   };

    return (
        <div className=" w-full">
            <Typography
                component="h2"
                style={{ fontSize: "32px", fontWeight: 600, fontStyle: "semibold", lineHeight: "40px", color: Colors.primary.gray.neutral1100, marginBottom: 24 }}
            >
                Welcome to Coronation
                Registrars Self Service Portal
            </Typography>
            <Typography component="p" style={{ fontSize: "14px", fontWeight: 500, lineHeight: "20px", color: Colors.primary.gray.neutral600, marginBottom: 80 }}>
                Submit updates to your information in just a few clicks. Track the progress of your requests in real time. Our service level agreements remains sacrosanct. Every update is handled promptly, accurately, and with full accountability.
            </Typography>

            <div className="mt-8">
                <TextField
                    type="email"
                    label={{
                        text: "Validate your email to continue",
                        color: Colors.primary.gray.neutral700,
                        style: { fontWeight: "bold" },
                    }}
                    required
                    placeholder="peterdoe@gmail.com"
                    prefixIcon={
                        <Icon
                            icon="envelope-simple"
                            variant="outline"
                            color={Colors.primary.gray.neutral500}
                        />
                    }
                    onChange={(val: string) => setValue(val)}
                />
            </div>

            <div className="mt-6">
                {/* <Button
          background={Colors.primary.brand.purple500}
          label="Send OTP"
        //   variant="corporate"
        //   onClick={() => handleSendOTP()}
          style={{ width: "100%" }}
          variant={theme}
        /> */}
                <ThemedButton label="Send OTP" style={{ width: "100%" }} />
            </div>
        </div>
    );
};

export default AuthPageComponent;
