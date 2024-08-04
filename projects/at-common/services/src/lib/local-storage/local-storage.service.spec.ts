import { TestBed } from '@angular/core/testing';
import { LocalStorageService } from './local-storage.service';

interface TeamBAFTA {
  isProductive: boolean;
  isAwesome: boolean;
  isFriendly: boolean;
  teamMembers: string[];
}

describe('LocalStorageService', () => {
  let service: LocalStorageService<TeamBAFTA>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageService);
    localStorage.clear(); // Clear localStorage before each test
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should save data to localStorage', () => {
    const key = 'testKey';
    const data: TeamBAFTA = {
      isProductive: true,
      isAwesome: false,
      isFriendly: true,
      teamMembers: ['Jens', 'Kasper'],
    };

    service.save(key, data);

    const storedData = localStorage.getItem(key);
    expect(storedData).toBeTruthy();
    expect(JSON.parse(storedData!)).toEqual(data);
  });

  it('should load data from localStorage', () => {
    const key = 'testKey';
    const data: TeamBAFTA = {
      isProductive: false,
      isAwesome: true,
      isFriendly: true,
      teamMembers: ['Morten', 'Jonas'],
    };
    localStorage.setItem(key, JSON.stringify(data));

    const loadedData = service.load(key);
    expect(loadedData).toEqual(data);
  });

  it('should return null when loading non-existent data from localStorage', () => {
    const key = 'nonExistentKey';

    const loadedData = service.load(key);
    expect(loadedData).toBeNull();
  });

  it('should delete data from localStorage', () => {
    const key = 'testKey';
    const data: TeamBAFTA = {
      isProductive: true,
      isAwesome: true,
      isFriendly: false,
      teamMembers: ['Josefine', 'Søren'],
    };
    localStorage.setItem(key, JSON.stringify(data));

    service.delete(key);

    const storedData = localStorage.getItem(key);
    expect(storedData).toBeNull();
  });

  it('should return true if localStorage has data for a given key', () => {
    const key = 'testKey';
    const data: TeamBAFTA = {
      isProductive: false,
      isAwesome: false,
      isFriendly: true,
      teamMembers: ['Rebecca', 'Piotr'],
    };
    localStorage.setItem(key, JSON.stringify(data));

    const hasData = service.hasData(key);
    expect(hasData).toBeTrue();
  });

  it('should return false if localStorage does not have data for a given key', () => {
    const key = 'nonExistentKey';

    const hasData = service.hasData(key);
    expect(hasData).toBeFalse();
  });

  it('should clear all data from localStorage', () => {
    const key1 = 'testKey1';
    const key2 = 'testKey2';
    const data1: TeamBAFTA = {
      isProductive: true,
      isAwesome: false,
      isFriendly: true,
      teamMembers: ['Jens', 'Josefine'],
    };
    const data2: TeamBAFTA = {
      isProductive: false,
      isAwesome: true,
      isFriendly: false,
      teamMembers: ['Kasper', 'Piotr'],
    };
    localStorage.setItem(key1, JSON.stringify(data1));
    localStorage.setItem(key2, JSON.stringify(data2));

    service.clear();

    expect(localStorage.getItem(key1)).toBeNull();
    expect(localStorage.getItem(key2)).toBeNull();
  });
});
