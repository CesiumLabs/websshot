import * as Puppeteer from "puppeteer";

declare module "websshot" {

    export interface WebsShotOptions {
        removeTags?: string[];
        removeAttributes?: string[];
        height?: number;
        width?: number;
    }

    export type PuppeteerOptions = Puppeteer.LaunchOptions & Puppeteer.ChromeArgOptions & Puppeteer.BrowserOptions & { product?: Puppeteer.Product; extraPrefsFirefox?: Record<unknown>; }
    export type CaptureOptions = Puppeteer.ScreenshotOptions;

    export default class WebsShot {
        options: WebsShotOptions;
        puppeteerOptions: PuppeteerOptions;
        rawHTML: string;

        constructor(options?: WebsShotOptions, puppeteerOptions?: PuppeteerOptions);

        loadFromFile(filePath: string, markdown?: boolean): void;
        load(input: string, isMarkdown?: boolean): void;
        html(): string;
        setUserAgent(agent: string): void;
        screenshot(url?: string | false, options?: CaptureOptions): Promise<Buffer>;
        
        static get version(): string;
    }

}