import '@testing-library/jest-dom';
import { MessageChannel } from 'worker_threads';
import { TextEncoder, TextDecoder } from 'util';

/* eslint-disable @typescript-eslint/no-explicit-any */
(global as any).MessageChannel = MessageChannel;
(global as any).TextEncoder = TextEncoder;
(global as any).TextDecoder = TextDecoder;
