import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";
import englishFlag from "@/assets/flags/english.svg";
import portugueseFlag from "@/assets/flags/portuguese.svg";
import spanishFlag from "@/assets/flags/spanish.svg";
import germanFlag from "@/assets/flags/german.svg";
import russianFlag from "@/assets/flags/russian.svg";
import italianFlag from "@/assets/flags/italian.svg";
import koreanFlag from "@/assets/flags/korean.svg";
import thaiFlag from "@/assets/flags/thai.svg";
import vietnameseFlag from "@/assets/flags/vietnamese.svg";

const languages = [
  { code: "en", name: "English", flag: englishFlag },
  { code: "pt", name: "Português", flag: portugueseFlag },
  { code: "es", name: "Español", flag: spanishFlag },
  { code: "de", name: "Deutsch", flag: germanFlag },
  { code: "ru", name: "Русский", flag: russianFlag },
  { code: "it", name: "Italiano", flag: italianFlag },
  { code: "ko", name: "한국어", flag: koreanFlag },
  { code: "th", name: "ไทย", flag: thaiFlag },
  { code: "vi", name: "Tiếng Việt", flag: vietnameseFlag },
];

export const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const currentLanguage = languages.find(lang => lang.code === i18n.language);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="neural" size="sm" className="gap-2">
          <Globe className="w-4 h-4" />
          {currentLanguage && (
            <img 
              src={currentLanguage.flag} 
              alt={currentLanguage.name} 
              className="w-5 h-3.5 object-cover rounded-sm"
            />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => i18n.changeLanguage(language.code)}
            className="gap-2 cursor-pointer"
          >
            <img 
              src={language.flag} 
              alt={language.name} 
              className="w-6 h-4 object-cover rounded-sm"
            />
            <span>{language.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
