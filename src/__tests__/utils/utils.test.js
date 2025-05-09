import { debounce } from "../../utils/utils";

jest.useFakeTimers();

test("should delay the execution of callback", () => {
  const mockFn = jest.fn();
  const debounced = debounce(mockFn, 200);

  debounced("test");
  expect(mockFn).not.toHaveBeenCalled();

  jest.advanceTimersByTime(200);
  expect(mockFn).toHaveBeenCalledTimes(1);
  expect(mockFn).toHaveBeenCalledWith("test");
});

test("should call the function only once if triggered multiple times within delay", () => {
  const mockFn = jest.fn();
  const debounced = debounce(mockFn, 300);

  debounced("first");
  jest.advanceTimersByTime(100);
  debounced("second");
  jest.advanceTimersByTime(200);
  debounced("third");
  jest.advanceTimersByTime(300);
  expect(mockFn).toHaveBeenCalledTimes(1);
  expect(mockFn).toHaveBeenCalledWith("third");
});
